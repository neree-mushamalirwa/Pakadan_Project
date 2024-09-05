<?php

namespace App\Controller;

use App\Entity\TempusEntity;
use App\Form\EditPasswordType;
use App\Form\EditUserType;
use App\Form\FactoryType;
use App\Form\UserType;
use App\Repository\FactoryRepository;
use App\Repository\UserRepository;
use DirectoryIterator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class ParameterController extends AbstractController
{
    #[Route('admin/parameter', name: 'app_admin_parameter')]
    public function index(UserPasswordHasherInterface $hasher , Request $request , EntityManagerInterface $manager  , UserRepository $userRepository , FactoryRepository $factoryRepository): Response
    {
        // Script for user factory
        $error = null;
        if ($this->getUser() && $this->getUser()->getRoles()[0] == "ROLE_ADMIN") {
            $id = $this->getUser() -> getFactory();
            
        }else{
            $error = "Vous avez été déconnecté";
            return $error;
        }

        $product = $factoryRepository -> findOneBy(["id" => $id]);

        $images = $product -> getImageName();

        $form = $this -> createForm(FactoryType::class , $product);

        $form -> handleRequest($request);

        $tab = [];

        $tab_server = [];

        $tab_file_temporary_folder = [];

        $drop_files = [];

        $new_file_uploaded = [];

        $old_file_uploaded = [];

        foreach($images as $image){
            $tab_server[] = "images/".$image;
        }
        foreach($images as $image){
            $tab[] = $image;
        }

        if($form -> isSubmitted() && $form -> isValid()){
            $files = $request -> request -> get("file_update");

            $chemin_tmp = $this -> getParameter("file_directory_temporary");

            $chemin = $this -> getParameter("file_directory");

            $directory = new DirectoryIterator($chemin_tmp);

            foreach ($directory as $key => $value) {
                if($value -> isFile()){
                    $tab_file_temporary_folder[] = $value -> getFilename();
                }
           }
           $database_files = $tab;
           $form_files = json_decode($files);

           if($form_files == []){

            $product = $form -> getData();
            $product -> setImageName([]);

            $manager -> persist($product);
            $manager -> flush();
            foreach($tab as $t){
                if(file_exists($chemin.'/'.$t)){
                    unlink($chemin.'/'.$t);
                }
            }
            return $this -> redirectToRoute("app_admin_parameter");
            }

            // Check if the file of the database exists in the form files , if it exists we continue , else we add it in the drop_files table
            $tab_form_files_check = [];
           if($form_files){
            foreach($form_files as $form_file){
                if(isset(mb_split("/" , $form_file)[1])){
                    $tab_form_files_check[] = mb_split("/" , $form_file)[1];
                }else{
                    $tab_form_files_check[] = mb_split("/" , $form_file)[0];
                }
               
            }
           }
            
            foreach($database_files as $database_file){
                    if(in_array($database_file , $tab_form_files_check)){

                    }else{
                        $drop_files[] = $database_file;
                    }
                }
            // Check if the file of the form exists in the database files , if it exists we continue , else we add it in the drop_files table
                if($form_files){
                    foreach($form_files as $form_file){
                        if(isset(mb_split("/" , $form_file)[1])){
                            if(in_array(mb_split("/" , $form_file)[1] , $database_files)){
                                $old_file_uploaded[] = mb_split("/" , $form_file)[1];
                            }else{
                                $new_file_uploaded[] = mb_split("/" , $form_file)[1];
                                
                            }
                        }else{
                            if(in_array(mb_split("/" , $form_file)[0] , $database_files)){
                                $old_file_uploaded[] = mb_split("/" , $form_file)[0];
                            }else{
                                $new_file_uploaded[] = mb_split("/" , $form_file)[0];
                                
                            }
                        }
                       
                    }
                    
                }
            // Now we add the file of temporary in the images folder
            $reset = '';
            $file_to_copy = [];
                foreach($new_file_uploaded as $new_file){
                    $reset = uniqid().'-'.$new_file;
                    copy( $chemin_tmp. '/'.$new_file , $chemin . '/'. $reset);
                    $file_to_copy[] = $reset;
                    $reset = '';
                }

            // Now we delete those file in the temporary folder
                foreach($new_file_uploaded as $new_file){
                    unlink($chemin_tmp."/".$new_file);
                }

                 // Now we delete those file in the images folder
                foreach($drop_files as $drop_file){
                    unlink($chemin."/".$drop_file);
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
                 foreach($old_file_uploaded as $value){
                    $final_tab_form_files[] = $value;
                }
                 foreach($file_to_copy as $value){
                    $final_tab_form_files[] = $value;
                }

                $product = $form -> getData();
                $product -> setImageName($final_tab_form_files); 

                $manager -> persist($product);
                $manager -> flush();

                return $this -> redirectToRoute("app_admin_parameter");
         
        }

        $chemin = $this -> getParameter("file_directory_temporary");


        // Informations about User

        $id_user = $this -> getUser();

        $tempus = new TempusEntity();
        $tempus  -> setEmail($id_user -> getEmail())
                -> setNoms($id_user -> getNoms())
                -> setTelephone($id_user -> getTelephone())
        ;

        $user = $userRepository -> findOneBy(["id" => $id_user]);

        $form_user = $this -> createForm(EditUserType::class , $tempus);

        $form_user -> handleRequest($request);

        if ($form_user -> isSubmitted() && $form_user -> isValid()) {

            if($hasher -> isPasswordValid($user , $form_user -> getData() -> getPassword())){
               
                $tmp = $form_user -> getData();

                $user -> setNoms($tmp -> getNoms())
                        -> setEmail($tmp -> getEmail())
                        -> setTelephone($tmp -> getTelephone())
                ;

                $user -> setPassword($hasher -> hashPassword($user , $tmp -> getPassword()));

                $manager -> persist($user);

                $manager -> flush();

                $this -> addFlash("success" , "Enregistrment reussi !!");

                return $this -> redirectToRoute("app_admin_parameter");
            }else{
                $this -> addFlash("warning" , "Les mot de passe ne correspondent pas !!");

                return $this -> redirectToRoute("app_admin_parameter");
            }
            
        }

         // Informations about Passwword


        $user_pass = $userRepository -> findOneBy(["id" => $id_user]);

        $form_pass = $this -> createForm(EditPasswordType::class);

        $form_pass -> handleRequest($request);

        if($form_pass -> isSubmitted() && $form_pass -> isValid()){
            if($hasher -> isPasswordValid($user_pass , $form_pass -> getData()['password'])){
                $user_pass -> setPassword(
                    $hasher -> hashPassword($user_pass , $form_pass -> getData()["newPassword"])
                );
            }
            $manager -> persist($user_pass);
            $manager -> flush();

            $this -> addFlash('success' , 'Votre mot de passe a été modifié avec succès !!!'
            );
            return $this -> redirectToRoute("app_admin_parameter");
        }



        return $this->render('parameter/index.html.twig', [
            'controller_name' => 'AdminFactoryController',
            'form' => $form,
            'form_user' => $form_user,
            'form_pass' => $form_pass,
            'chemin' => $chemin,
            'images' => $images,
            'files' => $tab_server,
            'user' => $user,
        ]);

        
    }
}
