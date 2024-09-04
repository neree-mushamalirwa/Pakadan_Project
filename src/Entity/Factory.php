<?php

namespace App\Entity;

use App\Repository\FactoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FactoryRepository::class)]
class Factory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $adresse = null;

    #[ORM\Column(type: Types::ARRAY)]
    private array $imageName = [];

    #[ORM\ManyToOne(inversedBy: 'factories')]
    private ?Category $category = null;

    #[ORM\ManyToOne(inversedBy: 'factories')]
    private ?CategoryItem $categoryItem = null;

    #[ORM\Column(length: 100000000000000)]
    private ?string $description = null;

    /**
     * @var Collection<int, User>
     */
    #[ORM\OneToMany(targetEntity: User::class, mappedBy: 'factory')]
    private Collection $users;

    /**
     * @var Collection<int, ShowCaseHomePage>
     */
    #[ORM\OneToMany(targetEntity: ShowCaseHomePage::class, mappedBy: 'factory')]
    private Collection $showCaseHomePages;

    /**
     * @var Collection<int, ShowCaseAbout>
     */
    #[ORM\OneToMany(targetEntity: ShowCaseAbout::class, mappedBy: 'factory')]
    private Collection $showCaseAbouts;

    /**
     * @var Collection<int, ShowCaseImages>
     */
    #[ORM\OneToMany(targetEntity: ShowCaseImages::class, mappedBy: 'factory')]
    private Collection $showCaseImages;

    /**
     * @var Collection<int, ShowCaseNews>
     */
    #[ORM\OneToMany(targetEntity: ShowCaseNews::class, mappedBy: 'factory')]
    private Collection $showCaseNews;

    /**
     * @var Collection<int, ShowCaseServices>
     */
    #[ORM\OneToMany(targetEntity: ShowCaseServices::class, mappedBy: 'factory')]
    private Collection $showCaseServices;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->showCaseHomePages = new ArrayCollection();
        $this->showCaseAbouts = new ArrayCollection();
        $this->showCaseImages = new ArrayCollection();
        $this->showCaseNews = new ArrayCollection();
        $this->showCaseServices = new ArrayCollection();
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

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): static
    {
        $this->adresse = $adresse;

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

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }

    public function getCategoryItem(): ?CategoryItem
    {
        return $this->categoryItem;
    }

    public function setCategoryItem(?CategoryItem $categoryItem): static
    {
        $this->categoryItem = $categoryItem;

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
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->setFactory($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->users->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getFactory() === $this) {
                $user->setFactory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ShowCaseHomePage>
     */
    public function getShowCaseHomePages(): Collection
    {
        return $this->showCaseHomePages;
    }

    public function addShowCaseHomePage(ShowCaseHomePage $showCaseHomePage): static
    {
        if (!$this->showCaseHomePages->contains($showCaseHomePage)) {
            $this->showCaseHomePages->add($showCaseHomePage);
            $showCaseHomePage->setFactory($this);
        }

        return $this;
    }

    public function removeShowCaseHomePage(ShowCaseHomePage $showCaseHomePage): static
    {
        if ($this->showCaseHomePages->removeElement($showCaseHomePage)) {
            // set the owning side to null (unless already changed)
            if ($showCaseHomePage->getFactory() === $this) {
                $showCaseHomePage->setFactory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ShowCaseAbout>
     */
    public function getShowCaseAbouts(): Collection
    {
        return $this->showCaseAbouts;
    }

    public function addShowCaseAbout(ShowCaseAbout $showCaseAbout): static
    {
        if (!$this->showCaseAbouts->contains($showCaseAbout)) {
            $this->showCaseAbouts->add($showCaseAbout);
            $showCaseAbout->setFactory($this);
        }

        return $this;
    }

    public function removeShowCaseAbout(ShowCaseAbout $showCaseAbout): static
    {
        if ($this->showCaseAbouts->removeElement($showCaseAbout)) {
            // set the owning side to null (unless already changed)
            if ($showCaseAbout->getFactory() === $this) {
                $showCaseAbout->setFactory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ShowCaseImages>
     */
    public function getShowCaseImages(): Collection
    {
        return $this->showCaseImages;
    }

    public function addShowCaseImage(ShowCaseImages $showCaseImage): static
    {
        if (!$this->showCaseImages->contains($showCaseImage)) {
            $this->showCaseImages->add($showCaseImage);
            $showCaseImage->setFactory($this);
        }

        return $this;
    }

    public function removeShowCaseImage(ShowCaseImages $showCaseImage): static
    {
        if ($this->showCaseImages->removeElement($showCaseImage)) {
            // set the owning side to null (unless already changed)
            if ($showCaseImage->getFactory() === $this) {
                $showCaseImage->setFactory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ShowCaseNews>
     */
    public function getShowCaseNews(): Collection
    {
        return $this->showCaseNews;
    }

    public function addShowCaseNews(ShowCaseNews $showCaseNews): static
    {
        if (!$this->showCaseNews->contains($showCaseNews)) {
            $this->showCaseNews->add($showCaseNews);
            $showCaseNews->setFactory($this);
        }

        return $this;
    }

    public function removeShowCaseNews(ShowCaseNews $showCaseNews): static
    {
        if ($this->showCaseNews->removeElement($showCaseNews)) {
            // set the owning side to null (unless already changed)
            if ($showCaseNews->getFactory() === $this) {
                $showCaseNews->setFactory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ShowCaseServices>
     */
    public function getShowCaseServices(): Collection
    {
        return $this->showCaseServices;
    }

    public function addShowCaseService(ShowCaseServices $showCaseService): static
    {
        if (!$this->showCaseServices->contains($showCaseService)) {
            $this->showCaseServices->add($showCaseService);
            $showCaseService->setFactory($this);
        }

        return $this;
    }

    public function removeShowCaseService(ShowCaseServices $showCaseService): static
    {
        if ($this->showCaseServices->removeElement($showCaseService)) {
            // set the owning side to null (unless already changed)
            if ($showCaseService->getFactory() === $this) {
                $showCaseService->setFactory(null);
            }
        }

        return $this;
    }
}
