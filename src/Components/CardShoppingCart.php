<?php

namespace App\Components;

use App\Entity\Shop;
use App\Repository\FactoryRepository;
use App\Repository\ShoppingCartRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("cardShoppingCart")]
class CardShoppingCart extends AbstractController{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?array $quantity = null;

    public ?array $shop = null;

    public function __construct(
        private Security $security,
        private ShoppingCartRepository $shoppingCartRepository , 
        private FactoryRepository $factoryRepository ,
        private EntityManagerInterface $manager ,
    )
    {
        $factoryObject = $this -> factoryRepository -> findAll();
        foreach ($factoryObject as $key => $value) {
           $this -> shop [$value -> getName()] = $this -> getShoppingCarts($value -> getId());
        }
        
    }

    
    #[LiveAction()]
    public function setDelete(#[LiveArg()] int $id){
        $this -> id = $id;

        return $this;
    }
    #[LiveAction()]
    public function Exit(){
        $this -> id = null;
     
        return $this;
    }

    #[LiveAction]
    public function deleteItem(#[LiveArg()] int $id){
        $product = $this -> shoppingCartRepository -> findOneBy(["id" => $id]);


        if($product){
            $this -> manager -> remove($product);
            $this -> manager -> flush();

            return $this -> redirectToRoute("app_shopping_cart");

        }
    }
    #[LiveAction]
    public function validateCart(){
        if ($this -> security -> getUser()) {
            $shoppingCartObject = $this -> shoppingCartRepository -> createQueryBuilder("q")
                                                                    -> where("q.validated = :validated")
                                                                    -> setParameter("validated" , false)
                                                                    -> andWhere("q.statut = :statut")
                                                                    -> setParameter("statut" , "En cours")
                                                                    -> andWhere("q.user = :user")
                                                                    -> setParameter("user" , $this -> security -> getUser())
                                                                    -> getQuery()
                                                                    -> getResult()
                                                                    ;
            $shop = new Shop();
            $shop -> setCodeShop("Shop".random_int(0,1000))
                 -> setUser($this -> security -> getUser());

            $this -> manager -> persist($shop);

            $this -> manager -> flush();

            foreach ($shoppingCartObject as $key => $value) {

                $value -> setValidated(true);
                $value -> setStatut("Payée");
                $value -> setShop($shop);

                $this -> manager -> persist($value);

                $this -> manager -> flush();

                $this -> addFlash("success" , "Votre panier a été validée");


            }
            return $this -> redirectToRoute("app_shopping_cart");

        }
        
    }

    public function getShoppingCarts(int $id){
        if ($id) {
            $shoppingCartObject = $this -> shoppingCartRepository -> createQueryBuilder("q")
                                                    -> where("q.factory = :factory")
                                                    -> setParameter("factory" , $id)
                                                    -> andWhere("q.validated = :validated")
                                                    -> setParameter("validated" , false)
                                                    -> andWhere("q.statut = :statut")
                                                    -> setParameter("statut" , "En cours")
                                                    -> andWhere("q.user = :user")
                                                    -> setParameter("user" , $this -> security -> getUser())
                                                    -> getQuery()
                                                    -> getResult()
                                                    ;
            return $shoppingCartObject;
        }
    }



}

?>