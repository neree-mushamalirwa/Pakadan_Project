<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class ConnectingCustomerController extends AbstractController
{
    #[Route('/connecting/customer', name: 'app_login_customer')]
    public function index(AuthenticationUtils $auth): Response
    {
        $error = $auth -> getLastAuthenticationError();

        if ($this -> getUser()) {
            return $this -> redirectToRoute("app_home");
        }

        return $this->render('connecting_customer/login.html.twig', [
            'controller_name' => 'ConnectingCustomerController',
            'error' => $error,
        ]);
    }
}
