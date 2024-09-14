<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class AdminUserController extends AbstractController
{
    #[Route('/admin/users', name: 'app_admin_user')]
    public function index(): Response
    {
        return $this->render('admin_user/index.html.twig', [
            'controller_name' => 'AdminUserController',
        ]);
    }
    #[Route('/admin/users/new', name: 'app_admin_user_new')]
    public function new(Request $request , EntityManagerInterface $manager , UserPasswordHasherInterface $hasher): Response
    {
        $user = new User();

        $form = $this -> createForm(UserType::class , $user);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $user = $form -> getData();
            $user -> setPassword($hasher -> hashPassword($user , $form -> getData() -> getPassword()));
            $user -> setRoles(["ROLE_ADMIN"]);


            $manager -> persist($user);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_user");
        }
        return $this->render('admin_user/new.html.twig', [
            'controller_name' => 'AdminUserController',
            'form' => $form,
        ]);
    }
}
