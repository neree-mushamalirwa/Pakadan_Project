<?php

namespace App\Controller;

use App\Entity\Requests;
use App\Form\RequestsType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class RequestsController extends AbstractController
{
    #[Route('admin/requests', name: 'app_admin_requests')]
    public function index(): Response
    {
        return $this->render('requests/index.html.twig', [
            'controller_name' => 'RequestsController',
        ]);
    }
    #[Route('/requests', name: 'app_requests')]
    public function requestSite(Request $request , EntityManagerInterface $manager): Response
    {
        $requests = new Requests();

        $form = $this -> createForm(RequestsType::class , $requests);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $requests = $form -> getData();

            $manager -> persist($requests);

            $manager -> flush();

            $this -> addFlash("success" , "Votre demande a été envoyée avec succès !! \n Vérifier votre boîte mail pour les prochaines directives");

            return $this -> redirectToRoute("app_home");
        }

        return $this->render('requests/new.html.twig', [
            'controller_name' => 'RequestsController',
            'form' => $form,
        ]);
    }
}
