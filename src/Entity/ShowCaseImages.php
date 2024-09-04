<?php

namespace App\Entity;

use App\Repository\ShowCaseImagesRepository;
use DateTimeImmutable;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ShowCaseImagesRepository::class)]
class ShowCaseImages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $imageName = [];

    #[ORM\ManyToOne(inversedBy: 'showCaseImages')]
    private ?Factory $factory = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    public function __construct()
    {
        $this -> createdAt = new DateTimeImmutable();
    }

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

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

   
}
