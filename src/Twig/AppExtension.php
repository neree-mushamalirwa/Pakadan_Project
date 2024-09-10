<?php

namespace App\Twig;

use App\Repository\CategoryItemRepository;
use App\Repository\CategoryRepository;
use App\Repository\ShoppingCartRepository;
use Symfony\Bundle\SecurityBundle\Security;
use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;

class AppExtension extends AbstractExtension implements GlobalsInterface
{
    public function __construct(
        private CategoryRepository $categoryRepository,
        private CategoryItemRepository $categoryItemRepository,
        private ShoppingCartRepository $shoppingCartRepository,
        private Security $security
    )
    {
        
    }
    public function getGlobals(): array
    {
        $categories = $this -> categoryRepository -> findAll();
        $categoriesItems = $this -> categoryItemRepository -> findAll();
        $shoppingCart = $this -> shoppingCartRepository -> createQueryBuilder("q")
                                                    -> where("q.validated = :validated")
                                                    -> setParameter("validated" , false)
                                                    -> andWhere("q.statut = :statut")
                                                    -> setParameter("statut" , "En cours")
                                                    -> andWhere("q.user = :user")
                                                    -> setParameter("user" , $this -> security -> getUser())
                                                    -> getQuery()
                                                    -> getResult()
                                                    ;
        return [
            'categories' => $categories,
            'categoriesItems' => $categoriesItems,
            'shoppingCart' => $shoppingCart,
        ];
    }
}



?>