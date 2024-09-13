<?php

namespace App\Controller;

use App\Entity\Notification;
use App\Form\NotificationType;
use App\Repository\NotificationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AdminNotificationsController extends AbstractController
{
    #[Route('/admin/notifications', name: 'app_admin_notifications')]
    public function index(): Response
    {
        return $this->render('admin_notifications/index.html.twig', [
            'controller_name' => 'AdminNotificationsController',
        ]);
    }
    #[Route('/admin/notifications/new', name: 'app_admin_notifications_new')]
    public function new(Request $request , EntityManagerInterface $manager): Response
    {
        $notification = new Notification();

        $form = $this -> createForm(NotificationType::class , $notification);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $notification = $form -> getData();

            $manager -> persist($notification);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_notifications");
        }

        return $this->render('admin_notifications/new.html.twig', [
            'controller_name' => 'AdminNotificationsController',
            "form" => $form
        ]);
    }
    #[Route('/admin/notifications/edit{id}', name: 'app_admin_notifications_edit')]
    public function edit(int $id , Request $request , EntityManagerInterface $manager, NotificationRepository $notificationRepository): Response
    {
        $notification = $notificationRepository -> findOneBy(["id" => $id]);

        $form = $this -> createForm(NotificationType::class , $notification);

        $form -> handleRequest($request);

        if ($form -> isSubmitted() && $form -> isValid()) {
            $notification = $form -> getData();

            $manager -> persist($notification);

            $manager -> flush();

            $this -> addFlash("success" , "Enregistrment reussi !!");

            return $this -> redirectToRoute("app_admin_notifications");
        }
        return $this->render('admin_notifications/edit.html.twig', [
            'controller_name' => 'AdminNotificationsController',
            "form" => $form
        ]);
    }
}
