<?php

namespace App\Controller;

use App\Entity\Account;
use App\Entity\User;
use App\Repository\AccountRepository;
use Doctrine\ORM\EntityManagerInterface;
use PasswordHasherService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AccountKeyController extends AbstractController
{

    public function __construct(
        private UserPasswordHasherInterface $hasher
    )
    {
        
    }
   
    #[Route('/account/key', name: 'app_account_key')]
    public function index(AccountRepository $accountRepository,  Request $request , EntityManagerInterface $manager,  AuthenticationUtils $auth): Response
    {

        $accountId = $request -> get("accountId");
        $accountKey = $request -> get("accountKey");
        $error = '';
        if (
            isset($accountId) && 
            isset($accountKey) 
        ) {
            $account = $accountRepository -> findOneBy(["accountId" => $accountId]);

            if($account -> getKeyGenerated() == $accountKey  && $account -> getAccountId() == $accountId){

                $user = new User();
                $user -> setNoms($account -> getNoms())
                      -> setTelephone($account -> getTelephone())
                      -> setAdresse($account -> getAdresse())
                      -> setEmail($account -> getEmail())
                      -> setPassword($account -> getPassword())
                      -> setRoles(["ROLE_CUSTOMER"])
                      -> setFactory(null);

                $manager -> persist($user);

                $manager -> remove($account);

                $manager -> flush();

                $this -> addFlash("success" , "Votre compte a été crée avex succès");

                return $this -> redirectToRoute("app_home");
            }else{

                $error = "Clé d'activation incorrecte";
                
                return $this -> redirectToRoute("app_account_key");
            }

        }

        return $this->render('account_key/index.html.twig', [
            'controller_name' => 'AccountKeyController',
            'error' => $error,
        ]);
    }
}
