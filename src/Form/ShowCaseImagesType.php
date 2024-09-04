<?php

namespace App\Form;

use App\Entity\ShowCaseImages;
use App\Repository\FactoryRepository;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;


class ShowCaseImagesType extends AbstractType
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
        ->add('description', TextType::class , [
            "attr" => [
                "class" => "input",
                "placeholder" => "Saisir la description de l'image",
            ],
            "label" => "Description de l'image",
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
            'data_class' => ShowCaseImages::class,
        ]);
    }
}
