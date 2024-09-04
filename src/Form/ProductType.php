<?php

namespace App\Form;

use App\Entity\Factory;
use App\Entity\Product;
use App\Entity\ProductCategory;
use App\Repository\FactoryRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;


class ProductType extends AbstractType
{
    public function __construct(
        private FactoryRepository $factoryRepository,
        private Security $security,
    ) {}
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Saisir le nom du produit",
                ],
                "label" => "Nom du produit",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('price', MoneyType::class, [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Saisir le prix du produit",
                ],
                "label" => "Prix du produit",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('devise', ChoiceType::class, [
                "choices" => [
                    "CDF" => "CDF",
                    "USD" => "USD"
                ],
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Choisir le devise",
                ],
                "label" => "Devise du produit",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])

            ->add('factory', ChoiceType::class, [
                "attr" => [
                    "class" => "input",
                ],
                "label" => "Entreprise",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ],
                'choices' => [
                    $this->factoryRepository->findOneBy(["id" => $this->security->getUser()->getFactory()])->getName() => $this->factoryRepository->findOneBy(["id" => $this->security->getUser()->getFactory()])
                ],
            ])
            ->add('category', EntityType::class, [
                'class' => ProductCategory::class,
                'choice_label' => 'name',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
