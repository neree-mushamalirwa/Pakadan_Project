<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Product;
use App\Entity\ProductCategory;
use App\Form\CategoryType;
use App\Form\ProductCategoryType;
use App\Form\ProductType;
use App\Repository\CategoryRepository;
use App\Repository\ProductCategoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProductCategoryController extends AbstractController
{
    #[Route('/product/category', name: 'app_admin_product_category')]
    public function index(Request $request , EntityManagerInterface $manager , ProductCategoryRepository $productCategoryRepository): Response
    {


        return $this->render('product_category/index.html.twig', [
            'controller_name' => 'ProductCategoryController',
        ]);
    }
    #[Route('/product/category/new', name: 'app_admin_product_category_new')]
    public function new(Request $request , EntityManagerInterface $manager , ProductCategoryRepository $productCategoryRepository): Response
    {
        $category = new ProductCategory();

        $form = $this -> createForm(ProductCategoryType::class , $category);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $category = $form -> getData();

            $manager -> persist($category);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_product_category");
        }

        return $this->render('product_category/new.html.twig', [
            'controller_name' => 'ProductCategoryController',
            'form' => $form,
        ]);
    }
    #[Route('/product/category/edit-{id}', name: 'app_admin_product_category_edit')]
    public function edit(int $id ,Request $request , EntityManagerInterface $manager ,ProductCategoryRepository $productCategoryRepository): Response
    {

        $category = $productCategoryRepository -> findOneBy(["id" => $id]);

        $form = $this -> createForm(ProductCategoryType::class , $category);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $category = $form -> getData();

            $manager -> persist($category);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_product_category");
        }
        return $this->render('product_category/edit.html.twig', [
            'controller_name' => 'ProductCategoryController',
            'form' => $form,
        ]);
    }
   
}
