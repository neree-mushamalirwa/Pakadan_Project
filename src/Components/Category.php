<?php

namespace App\Components;

use App\Repository\FactoryRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("category")]
class Category{

    use DefaultActionTrait;

    #[LiveProp(writable:true)]
    public ?string $query = "";

    #[LiveProp(writable:true)]
    public ?int $query_select = 5;

    public function __construct(
        private FactoryRepository $factoryRepository,
        private PaginatorInterface $paginator
    )
    {
        
    }

    public function filteredData(){
        $data=  $this -> factoryRepository -> createQueryBuilder("q")    
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