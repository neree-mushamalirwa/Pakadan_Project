<?php

// src/Twig/CarbonExtension.php

namespace App\Twig;

use Carbon\Carbon;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

Carbon::setLocale('fr');

class FormatDate extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // Filtre personnalisé pour utiliser diffForHumans
            new TwigFilter('diffForHumans', [$this, 'diffForHumans']),
        ];
    }

    // Méthode pour le filtre diffForHumans
    public function diffForHumans($date): string
    {
         // Vérifie si la date est une chaîne de caractères
         if (is_string($date)) {
            // Convertir la chaîne en instance Carbon
            $date = Carbon::parse($date);
        }

        // S'assurer que la date est bien un objet DateTimeInterface
        if ($date instanceof \DateTimeInterface) {
            return Carbon::instance($date)->diffForHumans();
        }

        throw new \InvalidArgumentException('Invalid date format.');
    }
}



?>