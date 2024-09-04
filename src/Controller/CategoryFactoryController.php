<?php

namespace App\Controller;

use App\Entity\Category;
use App\Form\CategoryType;
use App\Repository\CategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CategoryFactoryController extends AbstractController
{
    #[Route('admin/category/factory', name: 'app_admin_category_factory')]
    public function index(): Response
    {


        return $this->render('category_factory/index.html.twig', [
            'controller_name' => 'CategoryFactoryController',
        ]);
    }
    #[Route('admin/category/factory/new', name: 'app_admin_category_factory_new')]
    public function new(Request $request , EntityManagerInterface $manager): Response
    {

        $category = new Category();

        $form = $this -> createForm(CategoryType::class , $category);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $category = $form -> getData();

            $manager -> persist($category);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_category_factory");
        }



        return $this->render('category_factory/new.html.twig', [
            'controller_name' => 'CategoryFactoryController',
            'form' => $form,
        ]);
    }
    #[Route('admin/category/factory/edit-{id}', name: 'app_admin_category_factory_edit')]
    public function edit(Request $request , EntityManagerInterface $manager , int $id , CategoryRepository $repository): Response
    {

        $category = $repository -> findOneBy(["id" => $id]);

        $form = $this -> createForm(CategoryType::class , $category);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $category = $form -> getData();

            $manager -> persist($category);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_category_factory");
        }
        return $this->render('category_factory/edit.html.twig', [
            'controller_name' => 'CategoryFactoryController',
            'form' => $form,
        ]);
    }
    #[Route('admin/category/factory/detail-{id}', name: 'app_admin_category_factory_detail')]
    public function detail(Request $request , EntityManagerInterface $manager , int $id , CategoryRepository $repository): Response
    {

        $category = $repository -> findOneBy(["id" => $id]);

        $form = $this -> createForm(CategoryType::class , $category);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $category = $form -> getData();

            $manager -> persist($category);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_category_factory");
        }
        return $this->render('category_factory/detail.html.twig', [
            'controller_name' => 'CategoryFactoryController',
            'form' => $form,
            'category' => $category,
        ]);
    }
}
