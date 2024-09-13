<?php

namespace App\Components;

use App\Repository\FavoriteRepository;
use App\Repository\ProductCategoryRepository;
use App\Repository\ProductRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("cardFavorites")]
class CardFavorites{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?int $query_select_favorites = 4;

    public function __construct(
        private FavoriteRepository $favoriteRepository,
        private ProductRepository $productRepository,
        private PaginatorInterface $paginator,
    )
    {
        
    }

    #[LiveAction()]
    public function incrementFavorites(){
        $this -> query_select_favorites = $this -> query_select_favorites + 4;

        return $this -> query_select_favorites;
    }

    public function getFavorites(){
        $products = $this -> productRepository -> findAll();
        $tab = [];

        foreach ($products as $key => $value) {
            $data = $this -> favoriteRepository -> createQueryBuilder("q")
                                           -> where("q.product = :prod")
                                           -> setParameter("prod" ,$value -> getId())
                                           -> getQuery()
                                           -> getResult()
        ;
            $tab[] = [count($data) => $value];
        }
        

        return $this -> paginator -> paginate(
            $tab,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select_favorites
        );
    }


}

?>