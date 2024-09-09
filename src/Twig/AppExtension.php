<?php

namespace App\Twig;

use App\Repository\CategoryItemRepository;
use App\Repository\CategoryRepository;
use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;

class AppExtension extends AbstractExtension implements GlobalsInterface
{
    public function __construct(
        private CategoryRepository $categoryRepository,
        private CategoryItemRepository $categoryItemRepository,
    )
    {
        
    }
    public function getGlobals(): array
    {
        $categories = $this -> categoryRepository -> findAll();
        $categoriesItems = $this -> categoryItemRepository -> findAll();
        return [
            'categories' => $categories,
            'categoriesItems' => $categoriesItems,
        ];
    }
}



?>