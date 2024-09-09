<?php

namespace App\Entity;

use App\Repository\CategoryItemRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoryItemRepository::class)]
class CategoryItem
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\ManyToOne(inversedBy: 'categoryItems')]
    private ?Category $category = null;

    /**
     * @var Collection<int, Factory>
     */
    #[ORM\OneToMany(targetEntity: Factory::class, mappedBy: 'categoryItem')]
    private Collection $factories;

    #[ORM\Column(length: 10000000000000)]
    private ?string $description = null;

    public function __construct()
    {
        $this->factories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection<int, Factory>
     */
    public function getFactories(): Collection
    {
        return $this->factories;
    }

    public function addFactory(Factory $factory): static
    {
        if (!$this->factories->contains($factory)) {
            $this->factories->add($factory);
            $factory->setCategoryItem($this);
        }

        return $this;
    }

    public function removeFactory(Factory $factory): static
    {
        if ($this->factories->removeElement($factory)) {
            // set the owning side to null (unless already changed)
            if ($factory->getCategoryItem() === $this) {
                $factory->setCategoryItem(null);
            }
        }

        return $this;
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
}
