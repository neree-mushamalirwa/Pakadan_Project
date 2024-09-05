<?php

namespace App\Controller;

use App\Repository\FactoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ShowCaseController extends AbstractController
{
    #[Route('/show/case/{id}/{factory}', name: 'app_show_case')]
    public function index(int $id , string $factory , FactoryRepository $factoryRepository): Response
    {
        $factory = $factoryRepository -> findOneBy(["id" => $id]);

        return $this->render('show_case/index.html.twig', [
            'controller_name' => 'ShowCaseController',
            'factory' => $factory,
        ]);
    }
}
