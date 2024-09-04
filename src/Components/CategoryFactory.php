<?php

namespace App\Components;

use App\Repository\CategoryRepository;
use App\Repository\FactoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("categoryFactory")]
class CategoryFactory extends AbstractController{

    use DefaultActionTrait;

    #[LiveProp(writable:true)]
    public ?string $query = "";

    #[LiveProp(writable:true)]
    public ?int $query_select = 5;

    #[LiveProp(writable:true)]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?int $loading = null;

    #[LiveProp(writable:true)]
    public ?int $disloading = 1;


    public function __construct(
        private CategoryRepository $categoryRepository,
        private PaginatorInterface $paginator,
        private EntityManagerInterface $manager,
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
        $product = $this -> categoryRepository -> findOneBy(["id" => $id]);

        $chemin = $this -> getParameter("file_directory");

        if($product){
            $this -> manager -> remove($product);
            $this -> manager -> flush();

            return $this -> redirectToRoute("app_admin_factory");

        }
    }

    public function filteredData(){
        $data=  $this -> categoryRepository -> createQueryBuilder("q")    
                                          -> where("q.name LIKE :name")
                                          -> setParameter("name" , "%".$this -> query."%")
                                          -> getQuery()
                                          -> getResult()
        
        ;
        return $this -> paginator -> paginate(
            $data , 
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select
        );
    }
}


?>