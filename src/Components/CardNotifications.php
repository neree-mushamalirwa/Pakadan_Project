<?php

namespace App\Components;

use App\Repository\NotificationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("cardNotifications")]
class CardNotifications{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?int $query_select_notifications = 4;

    public function __construct(
        private NotificationRepository $notificationRepository,
        private PaginatorInterface $paginator,
        private EntityManagerInterface $manager,
    )
    {
        
    }



    #[LiveAction()]
    public function incrementNotifications(){
        $this -> query_select_notifications = $this -> query_select_notifications + 4;

        return $this -> query_select_notifications;
    }

    public function getNotifications(){
        $data = $this -> notificationRepository -> createQueryBuilder("q")
                                           -> orderBy("q.createdAt" , "DESC")
                                           -> getQuery()
                                           -> getResult()
        ;

        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select_notifications
        );
    }

}

?>