<?php

namespace App\Components;

use App\Entity\Notification;
use App\Repository\NotificationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("tableNotifications")]
class TableNotifications extends AbstractController{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?int $query_select = 4;

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
    public function incrementImages(){
        $this -> query_select_notifications = $this -> query_select_notifications + 4;

        return $this -> query_select_notifications;
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
        $product = $this -> notificationRepository -> findOneBy(["id" => $id]);


        if($product){
            $this -> manager -> remove($product);
            $this -> manager -> flush();

            return $this -> redirectToRoute("app_admin_notifications");

        }
    }

    public function getDataNotifications(){
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