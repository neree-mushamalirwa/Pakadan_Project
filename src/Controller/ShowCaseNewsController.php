<?php

namespace App\Controller;

use App\Entity\ShowCaseNews;
use App\Form\ShowCaseNewsType;
use App\Repository\ShowCaseNewsRepository;
use DirectoryIterator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ShowCaseNewsController extends AbstractController
{
    #[Route('/show/case/news', name: 'app_admin_show_case_news')]
    public function index(Request $request, EntityManagerInterface $manager, ShowCaseNewsRepository $showCaseNewsRepository): Response
    {
        $error = null;
        $images = null;
        $tab_server = null;
        if ($this->getUser() && $this->getUser()->getRoles()[0] == "ROLE_ADMIN") {
            $id = $this->getUser();
            $homePageSection = $showCaseNewsRepository->findOneBy(["factory" => $id->getFactory()]);

            $homeSection = new ShowCaseNews();

            $form = $this->createForm(ShowCaseNewsType::class, $homeSection);

            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $files = $request->request->get("file_update");

                $form_files = json_decode($files);

                $tab_form_files_check = [];
                if ($form_files) {



                    foreach ($form_files as $form_file) {
                        if (isset(mb_split("/", $form_file)[1])) {
                            $tab_form_files_check[] = mb_split("/", $form_file)[1];
                        } else {
                            $tab_form_files_check[] = mb_split("/", $form_file)[0];
                        }
                    }

                    $product = $form->getData();

                    $chemin_tmp = $this->getParameter("file_directory_temporary");

                    $chemin = $this->getParameter("file_directory");

                    //    $team -> setImageName($tab_form_files_check);

                    //    $manager -> persist($team);

                    //    $manager -> flush();

                    $directory = new DirectoryIterator($chemin_tmp);

                    $file_to_copy = [];

                    $file_to_copy_database = [];

                    foreach ($directory as $key => $value) {
                        if ($value->isFile() && in_array($value->getFilename(), $tab_form_files_check)) {
                            $file_to_copy[] = $value->getFilename();
                        }
                    }
                    $reset = '';
                    foreach ($file_to_copy as $file_copy) {
                        $reset = uniqid() . '-' . $file_copy;
                        copy($chemin_tmp . '/' . $file_copy, $chemin . '/' . $reset);
                        $file_to_copy_database[] = $reset;
                        $reset = '';
                    }
                    $product->setImageName($file_to_copy_database);

                    $manager->persist($product);

                    $manager->flush();

                    foreach ($tab_form_files_check as $key => $value) {
                        unlink($chemin_tmp . "/" . $value);
                    }
                    return $this->redirectToRoute("app_admin_show_case_news");
                } else {
                    $product = $form->getData();

                    $product->setImageName([]);

                    $manager->persist($product);

                    $manager->flush();

                    $this->addFlash("success", "Enregistrement réussi");

                    return $this->redirectToRoute("app_admin_show_case_news");
                }
            }
            return $this->render('show_case_news/index.html.twig', [
                'controller_name' => 'ShowCaseHomePageController',
                'error' => $error,
                'homePageSection' => $homePageSection,
                'form' => $form,
                'images' => $images,
                'files' => $tab_server,
            ]);
        } else {
            $error = "Apparemment vous avez été déconnecté !!!!";
        }
    }
    #[Route('/show/case/news/edit-{id}', name: 'app_admin_show_case_news_edit')]
    public function edit(int $id,Request $request, EntityManagerInterface $manager, ShowCaseNewsRepository $showCaseNewsRepository): Response
    {
        $error = null;
        $images = null;
        $tab_server = null;
        if ($this->getUser() && $this->getUser()->getRoles()[0] == "ROLE_ADMIN") {

            $homePageSection = $showCaseNewsRepository->findOneBy(["id" => $id]);

            $images = $homePageSection->getImageName();

            $form = $this->createForm(ShowCaseNewsType::class, $homePageSection);

            $form->handleRequest($request);

            $tab = [];

            $tab_server = [];

            $tab_file_temporary_folder = [];

            $drop_files = [];

            $new_file_uploaded = [];

            $old_file_uploaded = [];

            foreach ($images as $image) {
                $tab_server[] = "images/" . $image;
            }
            foreach ($images as $image) {
                $tab[] = $image;
            }

            if ($form->isSubmitted() && $form->isValid()) {
                $files = $request->request->get("file_update");

                $chemin_tmp = $this->getParameter("file_directory_temporary");

                $chemin = $this->getParameter("file_directory");

                $directory = new DirectoryIterator($chemin_tmp);

                foreach ($directory as $key => $value) {
                    if ($value->isFile()) {
                        $tab_file_temporary_folder[] = $value->getFilename();
                    }
                }
                $database_files = $tab;
                $form_files = json_decode($files);

                if ($form_files == []) {

                    $product = $form->getData();
                    $product->setImageName([]);

                    $manager->persist($product);
                    $manager->flush();
                    foreach ($tab as $t) {
                        if (file_exists($chemin . '/' . $t)) {
                            unlink($chemin . '/' . $t);
                        }
                    }
                    return $this->redirectToRoute("app_admin_show_case_news");
                }

                // Check if the file of the database exists in the form files , if it exists we continue , else we add it in the drop_files table
                $tab_form_files_check = [];
                if ($form_files) {
                    foreach ($form_files as $form_file) {
                        if (isset(mb_split("/", $form_file)[1])) {
                            $tab_form_files_check[] = mb_split("/", $form_file)[1];
                        } else {
                            $tab_form_files_check[] = mb_split("/", $form_file)[0];
                        }
                    }
                }

                foreach ($database_files as $database_file) {
                    if (in_array($database_file, $tab_form_files_check)) {
                    } else {
                        $drop_files[] = $database_file;
                    }
                }
                // Check if the file of the form exists in the database files , if it exists we continue , else we add it in the drop_files table
                if ($form_files) {
                    foreach ($form_files as $form_file) {
                        if (isset(mb_split("/", $form_file)[1])) {
                            if (in_array(mb_split("/", $form_file)[1], $database_files)) {
                                $old_file_uploaded[] = mb_split("/", $form_file)[1];
                            } else {
                                $new_file_uploaded[] = mb_split("/", $form_file)[1];
                            }
                        } else {
                            if (in_array(mb_split("/", $form_file)[0], $database_files)) {
                                $old_file_uploaded[] = mb_split("/", $form_file)[0];
                            } else {
                                $new_file_uploaded[] = mb_split("/", $form_file)[0];
                            }
                        }
                    }
                }
                // Now we add the file of temporary in the images folder
                $reset = '';
                $file_to_copy = [];
                foreach ($new_file_uploaded as $new_file) {
                    $reset = uniqid() . '-' . $new_file;
                    copy($chemin_tmp . '/' . $new_file, $chemin . '/' . $reset);
                    $file_to_copy[] = $reset;
                    $reset = '';
                }

                // Now we delete those file in the temporary folder
                foreach ($new_file_uploaded as $new_file) {
                    unlink($chemin_tmp . "/" . $new_file);
                }

                // Now we delete those file in the images folder
                foreach ($drop_files as $drop_file) {
                    unlink($chemin . "/" . $drop_file);
                }

                // $tab_form_files = [];
                // foreach($form_files as $form_file){
                //     if(isset(mb_split("/" , $form_file)[1])){
                //         $tab_form_files[] = mb_split("/" , $form_file)[1];
                //     }else{
                //         $tab_form_files[] = mb_split("/" , $form_file)[0];
                //     }

                // }

                $final_tab_form_files = [];
                foreach ($old_file_uploaded as $value) {
                    $final_tab_form_files[] = $value;
                }
                foreach ($file_to_copy as $value) {
                    $final_tab_form_files[] = $value;
                }

                $product = $form->getData();
                $product->setImageName($final_tab_form_files);

                $manager->persist($product);
                $manager->flush();

                return $this->redirectToRoute("app_admin_show_case_news");
            }

            $chemin = $this->getParameter("file_directory_temporary");



            return $this->render('show_case_news/edit.html.twig', [
                'controller_name' => 'AdminFactoryController',
                'form' => $form,
                'chemin' => $chemin,
                'images' => $images,
                'files' => $tab_server,
            ]);
        } else {
            $error = "Apparemment vous avez été déconnecté !!!!";
        }
    }
}
