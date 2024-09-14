<?php

namespace App\Form;

use App\Entity\Factory;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;


class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('noms', TextType::class, [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Saisir le nom complet",
                ],
                "label" => "Noms",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('email', TextType::class, [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Saisir votre identifiant",
                ],
                "label" => "Identifiant | Email",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('password', PasswordType::class, [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Saisir votre mot de passe",
                ],
                "label" => "Mot de passe",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('telephone', TextType::class, [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Saisir le numero de téléphone",
                ],
                "label" => "N° de téléphone",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('adresse', TextType::class, [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Saisir l'adresse'",
                ],
                "label" => "Adresse",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('factory', EntityType::class, [
                'class' => Factory::class,
                'choice_label' => 'name',
                "label" => "Entreprise",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
