<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AdminHomeController extends AbstractController
{
    #[Route('/admin', name: 'app_connection')]
    public function index(AuthenticationUtils $auth): Response
    {
        if($this -> getUser() && $this -> getUser() -> getRoles()[0] == "ROLE_SUPER_ADMIN"){
            return $this->redirectToRoute("app_admin_home");
        }else if($this -> getUser() && $this -> getUser() -> getRoles()[0] == "ROLE_ADMIN"){
            return $this->redirectToRoute("app_admin_home");
        }
        else if($this -> getUser() && $this -> getUser() -> getRoles()[0] == "ROLE_CUSTOMER"){
            return $this->redirectToRoute("app_home");
        }

         $error = $auth -> getLastAuthenticationError();
        return $this->render('admin_home/login.html.twig', [
            'controller_name' => 'AdminHomeController',
            'error' => $error,
        ]);
    }
    #[Route('/admin/home', name: 'app_admin_home')]
    public function home(): Response
    {
        return $this->render('admin_home/index.html.twig', [
            'controller_name' => 'AdminHomeController',
        ]);
    }
    #[Route('/admin/logout', name: 'app_out')]
    public function logout(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'AdminHomeController',
        ]);
    }
}
