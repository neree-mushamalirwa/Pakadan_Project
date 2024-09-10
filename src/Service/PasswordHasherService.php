<?php

namespace App\Service;

use Symfony\Component\PasswordHasher\Hasher\PasswordHasherFactoryInterface;
use Symfony\Component\PasswordHasher\PasswordHasherInterface;

class PasswordHasherService
{
    private PasswordHasherInterface $passwordHasher;

    public function __construct(PasswordHasherFactoryInterface $passwordHasherFactory)
    {
        // // Utilisez l'algorithme désiré, ici 'auto' pour choisir automatiquement l'algorithme recommandé
        // $this->passwordHasher = $passwordHasherFactory->getPasswordHasher('bcrypt');
    }

    public function hashPassword(string $plainPassword): string
    {
        return $this->passwordHasher->hash($plainPassword);
    }
}


?>