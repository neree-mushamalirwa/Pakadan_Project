<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 100000000000)]
    private ?string $description = null;

    /**
     * @var Collection<int, CategoryItem>
     */
    #[ORM\OneToMany(targetEntity: CategoryItem::class, mappedBy: 'category')]
    private Collection $categoryItems;

    /**
     * @var Collection<int, Factory>
     */
    #[ORM\OneToMany(targetEntity: Factory::class, mappedBy: 'category')]
    private Collection $factories;

    public function __construct()
    {
        $this->categoryItems = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, CategoryItem>
     */
    public function getCategoryItems(): Collection
    {
        return $this->categoryItems;
    }

    public function addCategoryItem(CategoryItem $categoryItem): static
    {
        if (!$this->categoryItems->contains($categoryItem)) {
            $this->categoryItems->add($categoryItem);
            $categoryItem->setCategory($this);
        }

        return $this;
    }

    public function removeCategoryItem(CategoryItem $categoryItem): static
    {
        if ($this->categoryItems->removeElement($categoryItem)) {
            // set the owning side to null (unless already changed)
            if ($categoryItem->getCategory() === $this) {
                $categoryItem->setCategory(null);
            }
        }

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
            $factory->setCategory($this);
        }

        return $this;
    }

    public function removeFactory(Factory $factory): static
    {
        if ($this->factories->removeElement($factory)) {
            // set the owning side to null (unless already changed)
            if ($factory->getCategory() === $this) {
                $factory->setCategory(null);
            }
        }

        return $this;
    }
}
