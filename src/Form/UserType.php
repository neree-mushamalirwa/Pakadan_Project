<?php

namespace App\Form;

use App\Entity\User;
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
            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options'  => [
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
                ],
                'second_options' => [
                    "attr" => [
                        "class" => "input",
                        "placeholder" => "Confirmer votre mot de passe",
                    ],
                    "label" => "Confirmer mot de passe",
                    "label_attr" => [
                        "attr" => "label_name"
                    ],
                    "constraints" => [
                        new Assert\NotBlank()
                    ]
                ],
                'mapped' => false,
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

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
