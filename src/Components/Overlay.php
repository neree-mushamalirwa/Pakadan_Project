<?php

namespace App\Components;

use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("overlay")]
class Overlay{

    use DefaultActionTrait;

    #[LiveProp(writable:true)]
    public ?int $id = null;
}


?>