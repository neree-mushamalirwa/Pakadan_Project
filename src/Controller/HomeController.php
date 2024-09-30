<?php

namespace App\Controller;

use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(CategoryRepository $categoryRepository , Request $request): Response
    {
        $categories = $categoryRepository -> findAll();

        if($this -> getUser() && $this -> getUser() -> getRoles()[0] == "ROLE_SUPER_ADMIN"){
            return $this->redirectToRoute("app_admin_home");
        }else if($this -> getUser() && $this -> getUser() -> getRoles()[0] == "ROLE_ADMIN"){
            return $this->redirectToRoute("app_admin_home");
        }
            return $this->render('home/index.html.twig', [
                'controller_name' => 'HomeController',
                // 'categories' => $categories,
            ]);
    }
    #[Route('/notify', name: 'app_notify')]
    public function notify(CategoryRepository $categoryRepository , Request $request): Response
    {
        return $this->render('home/notify.html.twig', [
            'controller_name' => 'HomeController',
            // 'categories' => $categories,
        ]);
    }
}
