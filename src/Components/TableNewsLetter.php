<?php

namespace App\Components;

use App\Repository\ContactRepository;
use App\Repository\NewsLetterRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("tableNewsLetter")]
class TableNewsLetter{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?int $query_select = 5;

    #[LiveProp(writable:true)]
    public ?int $query_select_contact = 4;

    public function __construct(
        private ContactRepository $contactRepository,
        private NewsLetterRepository $newsLetterRepository,
        private PaginatorInterface $paginator
    )
    {
        
    }

    public function getDataContact(){
        $data = $this -> contactRepository -> findAll();

        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select_contact
        );
    }
    public function getDataNewsLetter(){
        $data = $this -> newsLetterRepository -> findAll();

        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select
        );
    }

}

?>