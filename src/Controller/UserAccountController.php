<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class UserAccountController extends AbstractController
{
    #[Route('/user/account', name: 'app_user_account')]
    public function index(Request $request , EntityManagerInterface $manager , UserRepository $userRepository , UserPasswordHasherInterface $hasher): Response
    {
        $output = null ;

        if ($this -> getUser()) {
            $noms = $request -> get("noms");
            $email = $request -> get("email");
            $telephone = $request -> get("telephone");
            $password = $request -> get("password");
            $confirmPassword = $request -> get("confirmPassword");

            $oldPassword = $request -> get("oldPassword");
            $newPassword = $request -> get("newPassword");

            $userObject = $userRepository -> findOneBy(["id" => $this -> getUser() -> getId()]);


            if (
                isset($noms) &&
                isset($email) &&
                isset($telephone) &&
                isset($password) &&
                isset($confirmPassword)
            
            
            ) {
               if ($password == $confirmPassword && $hasher -> isPasswordValid($userObject , $password)){
                    $user = $userRepository -> findOneBy(["id" => $this -> getUser() -> getId()]);

                    $user -> setNoms($noms)
                        -> setEmail($email)
                        -> setTelephone($telephone);

                        $manager -> persist($user);

                        $manager -> flush();

                        $output = "Vos informations ont été modifiées avec succès";

                        $this -> addFlash("success" , "Vos informations ont été modifiées avec succès");

                        return $this -> redirectToRoute("app_user_account");
                }
            }else if($password != $confirmPassword){

                $this -> addFlash("warning" , "Les mots de passe ne correspondent pas");

            }

            if (
                isset($oldPassword) &&
                isset($newPassword)
            ) {

               if ($hasher -> isPasswordValid($userObject , $oldPassword) ) {
                    $user = $userRepository -> findOneBy(["id" => $this -> getUser() -> getId()]);

                    $user -> setPassword($hasher -> hashPassword($user , $newPassword));

                        $manager -> persist($user);

                        $manager -> flush();


                        $this -> addFlash("success_pass" , "Le mot de passe a été modifié avec succès");

                        return $this -> redirectToRoute("app_user_account");
                }
                else if (!$hasher -> isPasswordValid($userObject , $oldPassword) ){

                    $this -> addFlash("warning_pass" , "L'ancien mot de passe est incorrect");
                    return $this -> redirectToRoute("app_user_account");
    
                }
            }


        }
        
        return $this->render('user_account/index.html.twig', [
            'controller_name' => 'UserAccountController',
            'output' => $output,
        ]);
    }
}
