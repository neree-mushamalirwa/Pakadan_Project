<?php

namespace App\Components;

use App\Repository\FactoryRepository;
use App\Repository\RequestsRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("tableFactoriesSite")]
class TableFactoriesSite{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?int $query_select = 6;

    public function __construct(
        private FactoryRepository $factoryRepository,
        private PaginatorInterface $paginator
    )
    {
        
    }

    public function getData(){
        $data = $this -> factoryRepository -> createQueryBuilder("q")
                                            -> orderBy("q.createdAt" , "ASC")
                                            -> getQuery()
                                            -> getResult()
        ;

        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select
        );
    }
}

?>