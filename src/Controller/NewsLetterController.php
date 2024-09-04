<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class NewsLetterController extends AbstractController
{
    #[Route('admin/news/letter', name: 'app_admin_news_letter')]
    public function index(): Response
    {
        return $this->render('news_letter/index.html.twig', [
            'controller_name' => 'NewsLetterController',
        ]);
    }
}
