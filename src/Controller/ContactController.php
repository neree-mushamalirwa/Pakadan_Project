<?php

namespace App\Controller;

use App\Entity\Contact;
use App\MessageContact\MessageContact;
use App\Repository\FactoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Attribute\Route;

class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(MessageBusInterface $bus , Request $request , EntityManagerInterface $manager , FactoryRepository $factoryRepository): Response
    {
        $noms = $request -> get("noms");
        $email = $request -> get("email");
        $telephone = $request -> get("telephone");
        $subject = $request -> get("subject");
        $message = $request -> get("message");
        $factoryId = $request -> get("factoryId");

        // dd($noms ,$email , $telephone , $subject , $message, $factoryId);

        if (
            isset($noms) && 
            isset($email) && 
            isset($telephone) && 
            isset($subject) && 
            isset($message) && 
            isset($factoryId)
        ) {
            $factory = $factoryRepository -> findOneBy(["id" => $factoryId]);

            $contact = new Contact();
            $contact -> setNoms($noms)
                     -> setEmail($email)
                     -> setTelephone($telephone)
                     -> setSujet($subject)
                     -> setMessage($message)
                     -> setFactory($factory)
            ;
            $bus -> dispatch(new MessageContact($contact));

            $manager -> persist($contact);

            $manager -> flush();

            $this -> addFlash("success" , "Le message a été envoyé avec succès");

           
                return $this -> redirectToRoute("app_show_case" , [
                    "id" => $factory -> getId(),
                    "factory" => $factory -> getName(),
                ]);

        }


        
        return $this->render('contact/index.html.twig', [
            'controller_name' => 'ContactController',
        ]);
    }
}
