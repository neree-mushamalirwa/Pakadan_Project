<?php

namespace App\Components;

use App\Repository\FactoryRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("cardSearchBar")]
class CardSearchBar{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?string $query_search = "";

    public function __construct(
        private FactoryRepository $factoryRepository,
        private PaginatorInterface $paginator
    )
    {
        
    }

    #[LiveAction()]
    public function Exit(){
        $this -> id = null;

        return $this;
    }

    public function filteredData(){
        $data = $this -> factoryRepository -> createQueryBuilder("q")
                                           -> where("q.name LIKE :name")
                                           -> setParameter("name" , "%".$this -> query_search."%")
                                           -> getQuery()
                                           -> getResult()
                                           ;
        return $data;
    }

}

?>