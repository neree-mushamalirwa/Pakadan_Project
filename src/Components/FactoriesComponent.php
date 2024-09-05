<?php

namespace App\Components;

use App\Entity\Category;
use App\Repository\FactoryRepository;
use App\Repository\ProductRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("factoriesComponent")]
class FactoriesComponent{

    use DefaultActionTrait;

    #[LiveProp(writable:true)]
    public ?Category $category = null;

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
    
    public function sectionFactoriesCategories(){
        $data = $this -> category -> getCategoryItems();

        return $data;
    }
    #[LiveAction()]
    public function setCategoyItem(#[LiveArg()] int $id){
        $this -> query_category_item = $id;

        return $this ;
    }

    public function factoriesData(){
        if ($this -> query_category_item) {
            $data = $this -> factoryRepository -> createQueryBuilder("q")
                                                -> where("q.categoryItem = :categoryItem")
                                                -> setParameter("categoryItem" , $this -> query_category_item)
                                                -> andWhere("q.category = :category")
                                                -> setParameter("category" , $this -> category)
                                                -> getQuery()
                                                -> getResult()
                                    ;
        } else {
            $data = $this -> factoryRepository -> createQueryBuilder("q")
                                                -> andWhere("q.category = :category")
                                                -> setParameter("category" , $this -> category)
                                                -> getQuery()
                                                -> getResult()
            ;
        }

        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select_factories
        );
    }
}

?>