<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class RequestsController extends AbstractController
{
    #[Route('/requests', name: 'app_admin_requests')]
    public function index(): Response
    {
        return $this->render('requests/index.html.twig', [
            'controller_name' => 'RequestsController',
        ]);
    }
}
