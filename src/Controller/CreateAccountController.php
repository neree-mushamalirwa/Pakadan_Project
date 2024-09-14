<?php

namespace App\Controller;

use App\Entity\Account;
use App\Entity\Contact;
use App\MessageAccount\MessageAccount;
use App\Service\PasswordHasherService as ServicePasswordHasherService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactoryInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class CreateAccountController extends AbstractController
{
    
    
    #[Route('/create/account', name: 'app_create_account')]
    public function index(MessageBusInterface $bus,  Request $request , EntityManagerInterface $manager,  AuthenticationUtils $auth): Response
    {
        $error = $auth -> getLastAuthenticationError();

        $noms = $request -> get("noms");
        $telephone = $request -> get("telephone");
        $adresse = $request -> get("adresse");
        $identifiant = $request -> get("identifiant");
        $password = $request -> get("password");
        $confirmPassword = $request -> get("confirmPassword");
        

        if (
            isset($noms) && 
            isset($telephone) && 
            isset($adresse) && 
            isset($identifiant) && 
            isset($password) && 
            isset($confirmPassword)
        ) {
            if ($password == $confirmPassword) {
                $newPassword = $password;

                $user = new Account();
                $key_gen = password_hash("account".random_int(0,100) , PASSWORD_BCRYPT );
                $id_account = random_int(0, 1000);


                $user -> setNoms($noms)
                      -> setTelephone($telephone)
                      -> setAdresse($adresse)
                      -> setEmail($identifiant)
                      -> setPassword(password_hash($newPassword , PASSWORD_BCRYPT))
                      -> setAccountId($id_account)
                      -> setKeyGenerated($key_gen)
                      -> setAccountKey(null)
                      -> setMessage("La clé d'activation est : ".$key_gen . " Et l'identifiant du compte est : ".$id_account)
                      ;
                      
                $bus -> dispatch(new MessageAccount($user) );

                $manager -> persist($user);

                $manager -> flush();

                $this -> addFlash("success" , "Votre demande a été envoyée avec succès , Consulter vos mails pour les prochaines directives");

               

                
                return $this -> redirectToRoute("app_account_key");
                
            }
        }



        return $this->render('create_account/index.html.twig', [
            'controller_name' => 'CreateAccountController',
            'error' => $error,
        ]);
    }
}
