<?php

namespace App\Components;

use App\Entity\TempusEntity;
use App\Form\EditUserType;
use App\Repository\FactoryRepository;
use App\Repository\ShoppingCartRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("userAccount")]
class UserAccount extends AbstractController
{

    use DefaultActionTrait;

    #[LiveProp()]
    public ?int $id = null;

    #[LiveProp(writable: true)]
    public ?string $query_date = null;

    #[LiveProp(writable: true)]
    public ?string $firstOption = null;

    #[LiveProp(writable: true)]
    public ?string $secondOption = null;




    public function __construct(
        private Security $security,
        private ShoppingCartRepository $shoppingCartRepository,
        private FactoryRepository $factoryRepository,
        private UserPasswordHasherInterface $hasher,
        private EntityManagerInterface $manager
    ) {}


    public function getShoppingCarts()
    {
        $data = $this->groupDates();
        $shopping_table = [];

        if ($this -> query_date) {

            foreach ($data as $key => $value) {
                $shopping_table[$this -> query_date] = $this->getDataShoppingDates($this -> query_date);
            }
        }else{
            foreach ($data as $key => $value) {
                $shopping_table[$value["orderDate"]] = $this->getDataShoppingDates($value["orderDate"]);
            }
        }

       

        return $shopping_table;
    }

    public function groupDates()
    {
        $shoppingCartObject = $this->shoppingCartRepository->createQueryBuilder("q")
            ->where("q.validated = :validated")
            ->setParameter("validated", true)
            ->andWhere("q.statut = :statut")
            ->setParameter("statut", "Payée")
            ->andWhere("q.user = :user")
            ->setParameter("user", $this->security->getUser())
            ->select("SUBSTRING(q.createdAt, 1, 10) as orderDate, COUNT(q.id) as totalCarts")
            ->groupBy("orderDate")
            ->getQuery()
            ->getResult();
        return $shoppingCartObject;
    }

    public function getDataShoppingDates(string $date)
    {
        if ($this->query_date) {

            $shoppingCartObject = $this->shoppingCartRepository->createQueryBuilder("q")
                                                                ->where("q.validated = :validated")
                                                                ->setParameter("validated", true)
                                                                ->andWhere("q.statut = :statut")
                                                                ->setParameter("statut", "Payée")
                                                                ->andWhere("q.user = :user")
                                                                ->setParameter("user", $this->security->getUser())
                                                                ->andWhere("q.createdAt LIKE :date")
                                                                ->setParameter("date", "%" . $this->query_date . "%")
                                                                ->getQuery()
                                                                ->getResult();
            return $shoppingCartObject;
        } else {
            $shoppingCartObject = $this->shoppingCartRepository->createQueryBuilder("q")
                ->where("q.validated = :validated")
                ->setParameter("validated", true)
                ->andWhere("q.statut = :statut")
                ->setParameter("statut", "Payée")
                ->andWhere("q.user = :user")
                ->setParameter("user", $this->security->getUser())
                ->andWhere("q.createdAt LIKE :date")
                ->setParameter("date", "%" . $date . "%")
                ->getQuery()
                ->getResult();
            return $shoppingCartObject;
        }
    }
    public function countShoppings()
    {
        $shoppingCartObject = $this->shoppingCartRepository->createQueryBuilder("q")
            ->where("q.validated = :validated")
            ->setParameter("validated", true)
            ->andWhere("q.statut = :statut")
            ->setParameter("statut", "Payée")
            ->andWhere("q.user = :user")
            ->setParameter("user", $this->security->getUser())
            ->getQuery()
            ->getResult();
        return $shoppingCartObject;
    }

   
}
