<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\String\Slugger\SluggerInterface;

class FilePondController extends AbstractController
{
    #[Route('/filepond', name: 'app_file_pond')]
    public function load_service(Request $request , SluggerInterface $slugger){

        $file = $request -> files -> get("filepond");
        $newFilename = "";

        if($request -> getMethod() == "DELETE"){
            $chemin = $this -> getParameter("file_directory_temporary") ."/". $request -> getContent();
             unlink($chemin);
        }
        if($request -> getMethod() == "POST"){

            // $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            // $safeFilename = $slugger->slug($originalFilename);
            // $newFilename = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();
            $newFilename = $file->getClientOriginalName();

            try {
                $file -> move($this -> getParameter('file_directory_temporary') , $newFilename);
            } catch (FileException $e) {
                // ... handle exception if something happens during file upload
            }

            return new Response($newFilename);
        }
        if($request -> getMethod() == 'GET'){
            $files =$request -> query -> get("load");
            

            // return new Response(file_get_contents($files) , 200 , ['Content-Disposition' => 'inline; filename="'.$files.'"']);
            return new Response(file_get_contents($files) , 200 , ['Content-Disposition' => 'inline; filename="'.$files.'"' , 'Content-Type' => 'image/jpg']);
        }

        // // // return new Response(file_get_contents($component) , 200, ["Content-Disposition" => 'inline; filename="'. $component . '"']);
        return new Response($newFilename);
    }
    #[Route('/filepond_edit', name: 'app_file_pond_service'  , methods:"POST|DELETE|GET")]
    public function edit(Request $request , SluggerInterface $slugger){

        $file = $request -> files -> get("filepond");
        $newFilename = "";

        if($request -> getMethod() == "DELETE"){
            $chemin_tmp = $this -> getParameter("file_directory_temporary") ."/". $request -> getContent();
            $chemin = $this -> getParameter("file_directory") ."/". $request -> getContent();
             if(file_exists($chemin_tmp)){
                unlink($chemin_tmp);
             }
             if(file_exists($chemin)){
                unlink($chemin);
             }
            
        }
        if($request -> getMethod() == "POST"){

            // $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            // $safeFilename = $slugger->slug($originalFilename);
            // $newFilename = $safeFilename.'-'.uniqid().'.'.$file->guessExtension();
            $newFilename = $file->getClientOriginalName();

            try {
                $file -> move($this -> getParameter('file_directory_temporary') , $newFilename);
            } catch (FileException $e) {
                // ... handle exception if something happens during file upload
            }

            return new Response($newFilename);
        }
        if($request -> getMethod() == 'GET'){
            $files =$request -> query -> get("load");
            

            // return new Response(file_get_contents($files) , 200 , ['Content-Disposition' => 'inline; filename="'.$files.'"']);
            return new Response(file_get_contents($files) , 200 , ['Content-Disposition' => 'inline; filename="'.$files.'"' , 'Content-Type' => 'image/jpg']);
        }

        // // // return new Response(file_get_contents($component) , 200, ["Content-Disposition" => 'inline; filename="'. $component . '"']);
        return new Response($newFilename);
    }
}
