<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use App\Repository\FactoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CategoryController extends AbstractController
{
    #[Route('/category/{id}', name: 'app_category')]
    public function index(int $id , CategoryRepository $categoryRepository ,FactoryRepository $factoryRepository): Response
    {
        $categories = $categoryRepository -> findAll();
        $category = $categoryRepository -> findOneBy(["id" => $id]);
        $factories = $factoryRepository -> findBy(["category" => $id]);



        return $this->render('category/index.html.twig', [
            'controller_name' => 'CategoryController',
            'category' => $category,
            'categories' => $categories,
            'factories' => $factories,
        ]);
    }
}
