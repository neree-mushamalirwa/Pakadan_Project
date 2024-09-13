<?php

namespace App\Form;

use App\Entity\Category;
use App\Entity\CategoryItem;
use App\Entity\Factory;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;


class FactoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class , [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Entrez le nom de l'entreprise",
                ],
                "label" => "Nom de l'entreprise",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('adresse', TextType::class , [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Entrez l'adresse de l'entreprise",
                ],
                "label" => "Adresse de l'entreprise",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('email', EmailType::class , [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Entrez l'email de l'entreprise",
                ],
                "label" => "Email de l'entreprise",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('telephone', TextType::class , [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Entrez le numéro de l'entreprise",
                ],
                "label" => "Numéro de l'entreprise",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('category', EntityType::class, [
                'class' => Category::class,
                'choice_label' => 'name',
                "label" => "Catégorie",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                
            ])
            ->add('categoryItem', EntityType::class, [
                'class' => CategoryItem::class,
                'choice_label' => 'name',
                "label" => "Sous-catégorie",
                "label_attr" => [
                    "attr" => "label_name"
                ],
            ])
            ->add('description', TextareaType::class , [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Décrivez l'entreprise",
                ],
                "label" => "Description de l'entreprise",
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
            'data_class' => Factory::class,
        ]);
    }
}
