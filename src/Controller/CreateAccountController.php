<?php

namespace App\Controller;

use App\Entity\Account;
use App\Service\PasswordHasherService as ServicePasswordHasherService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactoryInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class CreateAccountController extends AbstractController
{
    
    
    #[Route('/create/account', name: 'app_create_account')]
    public function index(Request $request , EntityManagerInterface $manager,  AuthenticationUtils $auth): Response
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
                $user -> setNoms($noms)
                      -> setTelephone($telephone)
                      -> setAdresse($adresse)
                      -> setEmail($identifiant)
                      -> setPassword(password_hash($newPassword , PASSWORD_BCRYPT))
                      -> setAccountId(random_int(0, 1000))
                      -> setKeyGenerated(password_hash("account".random_int(0,100) , PASSWORD_BCRYPT ))
                      -> setAccountKey(null)
                      ;

                $manager -> persist($user);

                $manager -> flush();

                $this -> addFlash("success" , "Votre demande a été envoyée avec succès");

                return $this -> redirectToRoute("app_account_key");
                
            }
        }



        return $this->render('create_account/index.html.twig', [
            'controller_name' => 'CreateAccountController',
            'error' => $error,
        ]);
    }
}
