<?php

namespace App\Components;

use App\Repository\ContactRepository;
use App\Repository\NewsLetterRepository;
use App\Repository\RequestsRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("tableRequests")]
class TableRequests{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?int $query_select = 5;

    #[LiveProp(writable:true)]
    public ?int $query_select_contact = 4;

    public function __construct(
        private RequestsRepository $requestsRepository,
        private PaginatorInterface $paginator
    )
    {
        
    }

    public function getDataRequests(){
        $data = $this -> requestsRepository -> createQueryBuilder("q")
                                            -> orderBy("q.createdAt" , "DESC")
                                            -> getQuery()
                                            -> getResult()
        ;

        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select_contact
        );
    }
}

?>