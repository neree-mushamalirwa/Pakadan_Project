<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ShowCaseController extends AbstractController
{
    #[Route('/show/case', name: 'app_show_case')]
    public function index(): Response
    {
        return $this->render('show_case/index.html.twig', [
            'controller_name' => 'ShowCaseController',
        ]);
    }
}
