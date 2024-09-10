<?php

namespace App\Components;

use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("cardShoppingCart")]
class CardShoppingCart{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

}

?>