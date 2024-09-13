<?php

namespace App\Components;

use App\Entity\Factory;
use App\Entity\Favorite;
use App\Entity\Product;
use App\Repository\FactoryRepository;
use App\Repository\ProductRepository;
use App\Repository\RequestsRepository;
use App\Repository\ShowCaseImagesRepository;
use App\Repository\ShowCaseNewsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent("showCaseComponent")]
class ShowCaseComponent extends AbstractController{

    use DefaultActionTrait;

    #[LiveProp(writable:true)]
    public ?Factory $factory = null;

    #[LiveProp(writable:true)]
    public ?int $id = null;

    #[LiveProp(writable:true)]
    public ?Product $product = null;

    #[LiveProp(writable:true)]
    public ?int $query_select_images = 4;

    
    #[LiveProp(writable:true)]
    public ?int $query_select_services = 2;

    #[LiveProp(writable:true)]
    public ?int $query_select_products = 4;

    #[LiveProp(writable:true)]
    public ?int $query_select_news = 3;

    #[LiveProp(writable:true)]
    public ?int $query_category = null;

    #[LiveProp(writable:true)]
    public ?int $productId = null;

    
    #[LiveProp(writable:true)]
    public ?int $quantityCart = 0;





    public function __construct(
        private FactoryRepository $factoryRepository,
        private ProductRepository $productRepository,
        private PaginatorInterface $paginator,
        private ShowCaseNewsRepository $showCaseNewsRepository,
        private ShowCaseImagesRepository $showCaseImagesRepository,
        private EntityManagerInterface $manager,
    )
    {
        
    }

    #[LiveAction()]
    public function incrementImages(){
        $this -> query_select_images = $this -> query_select_images + 4;

        return $this -> query_select_images;
    }

    #[LiveAction()]
    public function incrementServices(){
        $this -> query_select_services = $this -> query_select_services + 2;

        return $this -> query_select_services;
    }

    #[LiveAction()]
    public function incrementNews(){
        $this -> query_select_news = $this -> query_select_news + 3;

        return $this -> query_select_news;
    }

    #[LiveAction()]
    public function incrementProducts(){
        $this -> query_select_products = $this -> query_select_products + 4;

        return $this -> query_select_products;
    }
    #[LiveAction()]
    public function addFavorite(#[LiveArg()] int $id){
        if ($id) {
            $product = $this -> productRepository -> findOneBy(["id" => $id]);

            $favorite = new Favorite();
            $favorite -> setProduct($product);
            if ($this -> getUser()) {
                $favorite -> setUser($this -> getUser());
            }

            $this -> manager -> persist($favorite);

            $this -> manager -> flush();
        }
    }


    // Script about shopping cart

    #[LiveAction()]
    public function setProducts(#[LiveArg()] int $id){
        $this -> productId = $id;

        if ($this -> productId) {
            $this -> product = $this -> productRepository -> findOneBy(["id" => $this -> productId]);
        }

        return $this;
    }

    #[LiveAction()]
    public function Exit(){
        $this -> productId = null;

    }
    #[LiveAction()]
    public function IncrementQuantity(){
        $this -> quantityCart = $this -> quantityCart  + 1;
    }
    #[LiveAction()]
    public function DecrementQuantity(){
        $this -> quantityCart = $this -> quantityCart  - 1;

    }
    #[LiveAction()]
    public function getProductObject(){
       return  $this -> productRepository -> findOneBy(["id" => $this -> productId]);

    }





    public function sectionHomePage(){
        $data = $this -> factory -> getShowCaseHomePages();

        return $data;
    }
    public function sectionAbout(){
        $data = $this -> factory -> getShowCaseAbouts();

        return $data;
    }
    public function sectionImages(){
        $data = $this -> showCaseImagesRepository -> createQueryBuilder("q")
                                           -> where("q.factory = :factory")
                                           -> setParameter("factory" , $this -> factory)
                                           -> orderBy("q.createdAt" , "DESC")
                                           -> getQuery()
                                           -> getResult()
                                           ;

        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select_images
        );
    }
    public function sectionNews(){
        $data = $this -> showCaseNewsRepository -> createQueryBuilder("q")
                                           -> where("q.factory = :factory")
                                           -> setParameter("factory" , $this -> factory)
                                           -> orderBy("q.createdAt" , "DESC")
                                           -> getQuery()
                                           -> getResult()
                                           ;

        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select_news
        );
    }
    public function sectionServices(){
        $data = $this -> factory -> getShowCaseServices();

        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select_services
        );
    }



    #[LiveAction()]
    public function setCategoryProduct(#[LiveArg()] int $id){
        $this -> query_category = $id;

        return $this ;
    }
    public function sectionProducts(){
        if ($this -> query_category) {
            $data = $this -> productRepository -> createQueryBuilder("q")
                                                -> where("q.factory = :factory")
                                                -> setParameter("factory" , $this -> factory)
                                                -> andWhere("q.category = :category")
                                                -> setParameter("category" , $this -> query_category)
                                                -> getQuery()
                                                -> getResult()
                                    ;
        } else {
            $data = $this -> productRepository -> createQueryBuilder("q")
                                                -> where("q.factory = :factory")
                                                -> setParameter("factory" , $this -> factory)
                                                -> getQuery()
                                                -> getResult()
            ;
        }
        

        return $this -> paginator -> paginate(
            $data,
            (new Request()) -> query -> getInt("page" , 1),
            $this -> query_select_products
        );
    }
    public function sectionProductsCategories(){
        $data = $this -> factory -> getProductCategories();

        return $data;
    }
}

?>