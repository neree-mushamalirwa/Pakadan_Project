<?php

namespace App\Controller;

use App\Entity\CategoryItem;
use App\Form\CategoryItemType;
use App\Form\CategoryType;
use App\Repository\CategoryItemRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CategoryItemController extends AbstractController
{
    #[Route('admin/category/item', name: 'app_admin_category_item')]
    public function index(): Response
    {
        return $this->render('category_item/index.html.twig', [
            'controller_name' => 'CategoryItemController',
        ]);
    }
    #[Route('admin/category/item/new', name: 'app_admin_category_item_new')]
    public function new(Request $request , EntityManagerInterface $manager): Response
    {
        $category = new CategoryItem();

        $form = $this -> createForm(CategoryItemType::class , $category);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $category = $form -> getData();

            $manager -> persist($category);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_category_item");
        }


        return $this->render('category_item/new.html.twig', [
            'controller_name' => 'CategoryItemController',
            'form' => $form,
        ]);
    }
    #[Route('admin/category/item/edit-{id}', name: 'app_admin_category_item_edit')]
    public function edit(Request $request , EntityManagerInterface $manager , int $id , CategoryItemRepository $repository): Response
    {
        $category = $repository -> findOneBy(["id" => $id]);

        $form = $this -> createForm(CategoryItemType::class , $category);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $category = $form -> getData();

            $manager -> persist($category);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_category_item");
        }
        return $this->render('category_item/edit.html.twig', [
            'controller_name' => 'CategoryItemController',
            'form' => $form,
        ]);
    }
    #[Route('admin/category/item/detail-{id}', name: 'app_admin_category_item_detail')]
    public function detail(Request $request , EntityManagerInterface $manager , int $id , CategoryItemRepository $repository): Response
    {

        $category = $repository -> findOneBy(["id" => $id]);

        $form = $this -> createForm(CategoryItemType::class , $category);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $category = $form -> getData();

            $manager -> persist($category);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_category_item");
        }
        return $this->render('category_item/detail.html.twig', [
            'controller_name' => 'CategoryItemController',
            'form' => $form,
            'category' => $category,
        ]);
    }
}
