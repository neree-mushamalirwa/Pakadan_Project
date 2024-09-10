<?php

namespace App\Components;

use App\Entity\Factory;
use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("modalShoppingCart")]
class ModalShoppingCart extends ShowCaseComponent{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

    #[LiveProp()]
    public ?Product $productObject = null;

    #[LiveProp()]
    public ?Factory $factoryId = null;

   public function __construct(
    private ProductRepository $productRepository
   )
   {
    
   }

   public function getProductObject(){
        if ($this -> id) {
            $this -> productObject =  $this -> productRepository -> findOneBy(["id" => $this -> id]);
        }

        return $this -> productObject;
   }


}

?>