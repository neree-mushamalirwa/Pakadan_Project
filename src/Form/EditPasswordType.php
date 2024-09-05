<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints as Assert;


class EditPasswordType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('password' , RepeatedType::class , [
                'type' => PasswordType::class , 
                'first_options' => [
                    'attr' => [
                        'class' => 'input',
                        'placeholder' => "Saisir l'ancien mot de passe",
                    ],
                    'label' => "Ancien mot de passe" ,
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
                        'placeholder' => "Confirmer l'ancien mot de passe",
                    ],
                    'label' => "confirmation de l'ancien mot de passe" ,
                    'label_attr' => [
                        'class' => 'label_name'
                    ] , 
                    'constraints' => [
                        new Assert\NotBlank()
                    ]
                    ],
                    'invalid_message'  => 'Les anciens mots de passe ne correspondent pas'

            ])
            ->add('newPassword' , RepeatedType::class , [
                'type' => PasswordType::class , 
                'first_options' => [
                    'attr' => [
                        'class' => 'input',
                        'placeholder' => "Saisir le nouveau mot de passe",
                    ],
                    'label' => "Nouveau mot de passe" ,
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
                        'placeholder' => "Confirmer le nouveau mot de passe",
                    ],
                    'label' => "confirmation du nouveau mot de passe" ,
                    'label_attr' => [
                        'class' => 'label_name'
                    ], 
                    'constraints' => [
                        new Assert\NotBlank()
                    ]
                    ],
                    'invalid_message'  => 'Les nouveaux mots de passe ne correspondent pas'
                    
            ])
            
            
        ;
    }

    
}
