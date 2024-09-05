<?php

namespace App\Controller;

use App\Entity\NewsLetter;
use App\Repository\FactoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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
    #[Route('news/letter', name: 'app_news_letter')]
    public function newsletter(Request $request , EntityManagerInterface $manager , FactoryRepository $factoryRepository): Response
    {

        $email = $request -> get("email");
        $factoryId = $request -> get("factoryId");

        if (
            isset($email) && 
            isset($factoryId)
        ) {

            $factory = $factoryRepository -> findOneBy(["id" => $factoryId]);

            $newsletter = new NewsLetter();
            $newsletter -> setEmail($email)
                        -> setFactory($factory)
            ;

            $manager -> persist($newsletter);

            $manager -> flush();

            $this -> addFlash("success" , "Le message a été envoyé avec succès");

            
            return $this -> redirectToRoute("app_show_case" , [
                "id" => $factory -> getId(),
                "factory" => $factory -> getName(),
            ]);
        }
        
    }
}
