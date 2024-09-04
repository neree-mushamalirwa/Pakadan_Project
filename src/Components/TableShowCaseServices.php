<?php

namespace App\Components;

use App\Repository\ShowCaseServicesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("tableShowCaseServices")]
class TableShowCaseServices extends AbstractController{

    use DefaultActionTrait;

    #[LiveProp(writable:true)]
    public ?string $query = "";

    #[LiveProp(writable:true)]
    public ?int $query_select = 4;

    #[LiveProp(writable:true)]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?int $loading = null;

    #[LiveProp(writable:true)]
    public ?int $disloading = 1;


    public function __construct(
        private ShowCaseServicesRepository $showCaseServicesRepository,
        private PaginatorInterface $paginator,
        private EntityManagerInterface $manager,
        private Security $security,
    )
    {
        
    }

    #[LiveAction()]
    public function setDelete(#[LiveArg()] int $id){
        $this -> id = $id;
        $this -> loading = $id;
        

        
        return $this;
    }
    #[LiveAction()]
    public function Exit(){
        $this -> id = null;
        $this -> loading = null;
        $this -> disloading = null;

        return $this;
    }

    #[LiveAction]
    public function deleteItem(#[LiveArg()] int $id){
        $product = $this -> showCaseServicesRepository -> findOneBy(["id" => $id]);

        $chemin = $this -> getParameter("file_directory");

        if($product){
            $this -> manager -> remove($product);
            $this -> manager -> flush();

            foreach ($product -> getImageName() as $key => $value) {
                unlink($chemin."/".$value);
           }

            return $this -> redirectToRoute("app_admin_show_case_images");

        }
    }

    public function filteredData(){
        $data=  $this -> showCaseServicesRepository -> createQueryBuilder("q")    
                                          -> where("q.description LIKE :name")
                                          -> setParameter("name" , "%".$this -> query."%")
                                          -> andWhere("q.factory = :fact")
                                          -> setParameter("fact" , $this -> security -> getUser() -> getFactory())
                                          -> getQuery()
                                          -> getResult()
        
        ;
        return $this -> paginator -> paginate(
            $data , 
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select
        );
    }

    public function hello(){

        return "Hello word";
    }
}


?>