<?php

namespace App\Form;

use App\Entity\Factory;
use App\Entity\ShowCaseHomePage;
use App\Repository\FactoryRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;


class ShowCaseHomePageType extends AbstractType
{
    public function __construct(
        private FactoryRepository $factoryRepository,
        private Security $security,
    )
    {
        
    }
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('titre1', TextType::class , [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Entrez le premier titre",
                ],
                "label" => "Titre 1",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('titre2', TextType::class , [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Entrez le second titre",
                ],
                "label" => "Titre 2",
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
                    $this -> factoryRepository -> findOneBy(["id" => $this -> security -> getUser() -> getFactory()]) -> getName() => $this -> factoryRepository -> findOneBy(["id" => $this -> security -> getUser() -> getFactory()])
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ShowCaseHomePage::class,
        ]);
    }
}
