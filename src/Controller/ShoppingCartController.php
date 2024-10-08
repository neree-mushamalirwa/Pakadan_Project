<?php

namespace App\Controller;

use App\Entity\ShoppingCart;
use App\Repository\FactoryRepository;
use App\Repository\ProductRepository;
use App\Repository\ShoppingCartRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ShoppingCartController extends AbstractController
{
    public function __construct(
        private Security $security,
        private ShoppingCartRepository $shoppingCartRepository , 
        private FactoryRepository $factoryRepository 
    )
    {
        
    }

    #[Route('/shopping/cart', name: 'app_shopping_cart')]
    public function index(Request $request ,UserRepository $userRepository , EntityManagerInterface $manager ,ShoppingCartRepository $shoppingCartRepository , FactoryRepository $factoryRepository , ProductRepository $productRepository): Response
    {
        $quantity = $request -> get("quantity");
        $factoryId = $request -> get("factory");
        $productId = $request -> get("product");
        $userId = $request -> get("user");

        if (
            isset($quantity) &&
            isset($factoryId) &&
            isset($productId) &&
            isset($userId) 
        ) {
            $factory = $factoryRepository -> findOneBy(["id" => $factoryId]);
            $product = $productRepository -> findOneBy(["id" => $productId]);
            $user = $userRepository -> findOneBy(["id" => $userId]);

            

            $shoppingCart = new ShoppingCart();
            $shoppingCart -> setProduct($product)
                          -> setFactory($factory)
                          -> setUser($user)
                          -> setQuantity($quantity)
                          -> setStatut("En cours")
                          -> setValidated(false)
                          -> setAmountPaid(0)
                          ;
            $manager -> persist($shoppingCart);

            $manager -> flush();

            $this -> addFlash("success" , "Produit a été ajouté au panier avec succès !!");

            return $this -> redirectToRoute("app_show_case" , [
                "id" => $factory -> getId(),
                "factory" => $factory -> getName(),
            ]);


        }

        return $this->render('shopping_cart/index.html.twig', [
            'controller_name' => 'ShoppingCartController',
        ]);
    }

    public function getShoppingCarts(){
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
            return $shoppingCartObject;
    }

    #[Route('/shopping/cart/update', name: 'app_shopping_cart_update')]
    public function update(Request $request ,UserRepository $userRepository , EntityManagerInterface $manager ,ShoppingCartRepository $shoppingCartRepository , FactoryRepository $factoryRepository , ProductRepository $productRepository): Response
    {
        $quantities = $request -> get("quantity");
        $products = $request -> get("product");

        $shopping_carts = $this -> getShoppingCarts();
        
        if (isset($quantities) &&
            isset($products)
        ) {
            foreach ($shopping_carts as $key => $value) {
                if (
                    isset($quantities["quantity".$value -> getProduct() -> getId()]) &&
                    isset($products["product".$value -> getProduct() -> getId()])
                    ) {
                    $cart = $shoppingCartRepository -> findOneBy(["id" => $value -> getId()]);
                    $cart -> setQuantity($quantities["quantity".$value -> getProduct() -> getId()]);
                    
                    $manager -> persist($cart);

                    $manager -> flush();

                    $this -> addFlash("success" , "Votre panier a été mis à jour");

                    return $this -> redirectToRoute("app_shopping_cart");

                }else{
                    dd("No data found");
                }

            }
            

        }

        return $this->render('shopping_cart/index.html.twig', [
            'controller_name' => 'ShoppingCartController',
        ]);
    }

    
}
