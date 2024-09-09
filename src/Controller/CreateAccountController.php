<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class CreateAccountController extends AbstractController
{
    #[Route('/create/account', name: 'app_create_account')]
    public function index(AuthenticationUtils $auth): Response
    {
        $error = $auth -> getLastAuthenticationError();

        return $this->render('create_account/index.html.twig', [
            'controller_name' => 'CreateAccountController',
            'error' => $error,
        ]);
    }
}
