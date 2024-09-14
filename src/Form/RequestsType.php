<?php

namespace App\Form;

use App\Entity\Requests;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;


class RequestsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('noms', TextType::class , [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Entrez votre nom complet",
                ],
                "label" => "Noms",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('email', TextType::class , [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Entrez votre adresse email",
                ],
                "label" => "Email",
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
                    "placeholder" => "Entrez le numéro de téléphone",
                ],
                "label" => "Téléphone",
                "label_attr" => [
                    "attr" => "label_name"
                ],
                "constraints" => [
                    new Assert\NotBlank()
                ]
            ])
            ->add('factoryName', TextType::class , [
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
            ->add('message', TextareaType::class , [
                "attr" => [
                    "class" => "input",
                    "placeholder" => "Saisissez votre message",
                ],
                "label" => "Message",
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
            'data_class' => Requests::class,
        ]);
    }
}
