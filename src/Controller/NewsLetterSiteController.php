<?php

namespace App\Controller;

use App\Entity\NewsLetter;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class NewsLetterSiteController extends AbstractController
{
    #[Route('/news/letter/site', name: 'app_news_letter_site')]
    public function newsletter(Request $request , EntityManagerInterface $manager): Response
    {

        $email = $request -> get("email_site");
        if (
            isset($email) 
        ) {


            $newsletter = new NewsLetter();
            $newsletter -> setEmail($email)
                        -> setFactory(null)
            ;

            $manager -> persist($newsletter);

            $manager -> flush();

            $this -> addFlash("success" , "Le message a été envoyé avec succès");

            return $this -> redirectToRoute("app_home");
           
        }
        return $this->render('news_letter_site/index.html.twig', [
            'controller_name' => 'NewsLetterSiteController',
        ]);
    }
}
