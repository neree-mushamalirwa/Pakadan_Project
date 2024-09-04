<?php

namespace App\Form;

use App\Entity\ShowCaseServices;
use App\Repository\FactoryRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;


class ShowCaseServicesType extends AbstractType
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
        ->add('title', TextType::class , [
            "attr" => [
                "class" => "input",
                "placeholder" => "Saisir le titre du service",
            ],
            "label" => "Titre du service",
            "label_attr" => [
                "attr" => "label_name"
            ],
            "constraints" => [
                new Assert\NotBlank()
            ]
        ])
        ->add('description', TextareaType::class , [
            "attr" => [
                "class" => "input",
                "placeholder" => "Saisir la description du service",
            ],
            "label" => "Description du service",
            "label_attr" => [
                "attr" => "label_name"
            ],
            "constraints" => [
                new Assert\NotBlank()
            ]
        ])
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ShowCaseServices::class,
        ]);
    }
}
