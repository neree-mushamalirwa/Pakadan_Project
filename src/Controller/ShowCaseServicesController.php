<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ShowCaseServicesController extends AbstractController
{
    #[Route('/show/case/services', name: 'app_show_case_services')]
    public function index(): Response
    {
        return $this->render('show_case_services/index.html.twig', [
            'controller_name' => 'ShowCaseServicesController',
        ]);
    }
}
