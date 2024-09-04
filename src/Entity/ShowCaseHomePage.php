<?php

namespace App\Entity;

use App\Repository\ShowCaseHomePageRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ShowCaseHomePageRepository::class)]
class ShowCaseHomePage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $titre1 = null;

    #[ORM\Column(length: 255)]
    private ?string $titre2 = null;

    #[ORM\ManyToOne(inversedBy: 'showCaseHomePages')]
    private ?Factory $factory = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $imageName = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre1(): ?string
    {
        return $this->titre1;
    }

    public function setTitre1(string $titre1): static
    {
        $this->titre1 = $titre1;

        return $this;
    }

    public function getTitre2(): ?string
    {
        return $this->titre2;
    }

    public function setTitre2(string $titre2): static
    {
        $this->titre2 = $titre2;

        return $this;
    }

    public function getFactory(): ?Factory
    {
        return $this->factory;
    }

    public function setFactory(?Factory $factory): static
    {
        $this->factory = $factory;

        return $this;
    }

    public function getImageName(): array
    {
        return $this->imageName;
    }

    public function setImageName(array $imageName): static
    {
        $this->imageName = $imageName;

        return $this;
    }
}
