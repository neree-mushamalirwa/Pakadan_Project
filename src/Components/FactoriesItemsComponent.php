<?php

namespace App\Components;

use App\Entity\CategoryItem;
use App\Repository\FactoryRepository;
use App\Repository\ProductRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("factoriesItemsComponent")]
class FactoriesItemsComponent{

    use DefaultActionTrait;

    #[LiveProp(writable:true)]
    public ?CategoryItem $categoryItem = null;

    #[LiveProp(writable:true)]
    public ?int $query_select_factories = 4;

    #[LiveProp(writable:true)]
    public ?int $query_category_item = null;

    
    public function __construct(
        private FactoryRepository $factoryRepository,
        private ProductRepository $productRepository,
        private PaginatorInterface $paginator
    )
    {
        
    }

    #[LiveAction()]
    public function incrementFactories(){
        $this -> query_select_factories = $this -> query_select_factories + 4;

        return $this -> query_select_factories;
    }
    
    #[LiveAction()]
    public function setCategoyItem(#[LiveArg()] int $id){
        $this -> query_category_item = $id;

        return $this ;
    }

    public function factoriesItemData(){
            $data = $this -> factoryRepository -> createQueryBuilder("q")
                                                -> where("q.categoryItem = :categoryItem")
                                                -> setParameter("categoryItem" , $this -> categoryItem)
                                                -> getQuery()
                                                -> getResult()
                                    ;
        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select_factories
        );
    }
}

?>