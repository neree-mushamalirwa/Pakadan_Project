<?php

namespace App\Entity;

use App\Repository\ShowCaseAboutRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ShowCaseAboutRepository::class)]
class ShowCaseAbout
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 10000000000000)]
    private ?string $description = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $imageName = [];

    #[ORM\ManyToOne(inversedBy: 'showCaseAbouts')]
    private ?Factory $factory = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

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

    public function getFactory(): ?Factory
    {
        return $this->factory;
    }

    public function setFactory(?Factory $factory): static
    {
        $this->factory = $factory;

        return $this;
    }
}
