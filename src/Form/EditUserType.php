<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;


class EditUserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('noms' , TextType::class , [
            "attr" => [
                "class" => "input",
                "placeholder" => "Saisir le nom complet"
            ],
            "label" => "Noms",
            "label_attr" => [
                "class" => "label_name"
            ],
            "constraints" => [
                new Assert\NotBlank()
            ]
        ])
        ->add('email' , EmailType::class , [
            "attr" => [
                "class" => "input",
                "placeholder" => "Saisir un adresse email"
            ],
            "label" => "Email",
            "label_attr" =>[
                "class" => "label_name"
            ],
            "constraints" => [
                new Assert\Email(),
                new Assert\NotBlank(),
            ]
        ])
        ->add('password', RepeatedType::class , [
            "type" => PasswordType::class,
            'first_options' => [
                'attr' => [
                    'class' => 'input',
                    "placeholder" => "Saisir un mot de passe",
                    'data-model' => "firstOption",
                ],
               
                'label' => "Mot de passe" ,
                'label_attr' => [
                    'class' => 'label_name'
                ],
                'constraints' => [
                    new Assert\NotBlank()
                ]
                ],
            'second_options' => [
                'attr' => [
                    'class' => 'input',
                    "placeholder" => "confirmer le mot de passe",
                    'data-model' => "secondOption",
                ],
                'label' => "Confirmation du mot de passe" ,
                'label_attr' => [
                    'class' => 'label_name'
                ], 
                'constraints' => [
                    new Assert\NotBlank()
                ]
                ],
                'invalid_message'  => 'Les mots de passe ne correspondent pas'
        ])
        ->add('telephone' , TextType::class , [
            "attr" => [
                "class" => "input",
                "placeholder" => "Saisir votre numero de téléphone"
            ],
            "label" => "N° Tel",
            "label_attr" =>[
                "class" => "label_name"
            ],
            "constraints" => [
                new Assert\NotBlank(),
            ]
        ])
    ;
    }
}
