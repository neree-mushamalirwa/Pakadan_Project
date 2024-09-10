<?php

namespace App\Entity;

use App\Repository\FactoryRepository;
use DateTimeImmutable;
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

    /**
     * @var Collection<int, Product>
     */
    #[ORM\OneToMany(targetEntity: Product::class, mappedBy: 'factory')]
    private Collection $products;

    /**
     * @var Collection<int, ProductCategory>
     */
    #[ORM\OneToMany(targetEntity: ProductCategory::class, mappedBy: 'factory')]
    private Collection $productCategories;

    #[ORM\Column(nullable:true)]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $telephone = null;

    /**
     * @var Collection<int, Contact>
     */
    #[ORM\OneToMany(targetEntity: Contact::class, mappedBy: 'factory')]
    private Collection $contacts;

    /**
     * @var Collection<int, NewsLetter>
     */
    #[ORM\OneToMany(targetEntity: NewsLetter::class, mappedBy: 'factory')]
    private Collection $newsLetters;

    /**
     * @var Collection<int, ShoppingCart>
     */
    #[ORM\OneToMany(targetEntity: ShoppingCart::class, mappedBy: 'factory')]
    private Collection $shoppingCarts;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->showCaseHomePages = new ArrayCollection();
        $this->showCaseAbouts = new ArrayCollection();
        $this->showCaseImages = new ArrayCollection();
        $this->showCaseNews = new ArrayCollection();
        $this->showCaseServices = new ArrayCollection();
        $this->products = new ArrayCollection();
        $this->productCategories = new ArrayCollection();
        $this->createdAt = new DateTimeImmutable();
        $this->contacts = new ArrayCollection();
        $this->newsLetters = new ArrayCollection();
        $this->shoppingCarts = new ArrayCollection();
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

    /**
     * @return Collection<int, Product>
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): static
    {
        if (!$this->products->contains($product)) {
            $this->products->add($product);
            $product->setFactory($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): static
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getFactory() === $this) {
                $product->setFactory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ProductCategory>
     */
    public function getProductCategories(): Collection
    {
        return $this->productCategories;
    }

    public function addProductCategory(ProductCategory $productCategory): static
    {
        if (!$this->productCategories->contains($productCategory)) {
            $this->productCategories->add($productCategory);
            $productCategory->setFactory($this);
        }

        return $this;
    }

    public function removeProductCategory(ProductCategory $productCategory): static
    {
        if ($this->productCategories->removeElement($productCategory)) {
            // set the owning side to null (unless already changed)
            if ($productCategory->getFactory() === $this) {
                $productCategory->setFactory(null);
            }
        }

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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): static
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * @return Collection<int, Contact>
     */
    public function getContacts(): Collection
    {
        return $this->contacts;
    }

    public function addContact(Contact $contact): static
    {
        if (!$this->contacts->contains($contact)) {
            $this->contacts->add($contact);
            $contact->setFactory($this);
        }

        return $this;
    }

    public function removeContact(Contact $contact): static
    {
        if ($this->contacts->removeElement($contact)) {
            // set the owning side to null (unless already changed)
            if ($contact->getFactory() === $this) {
                $contact->setFactory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, NewsLetter>
     */
    public function getNewsLetters(): Collection
    {
        return $this->newsLetters;
    }

    public function addNewsLetter(NewsLetter $newsLetter): static
    {
        if (!$this->newsLetters->contains($newsLetter)) {
            $this->newsLetters->add($newsLetter);
            $newsLetter->setFactory($this);
        }

        return $this;
    }

    public function removeNewsLetter(NewsLetter $newsLetter): static
    {
        if ($this->newsLetters->removeElement($newsLetter)) {
            // set the owning side to null (unless already changed)
            if ($newsLetter->getFactory() === $this) {
                $newsLetter->setFactory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ShoppingCart>
     */
    public function getShoppingCarts(): Collection
    {
        return $this->shoppingCarts;
    }

    public function addShoppingCart(ShoppingCart $shoppingCart): static
    {
        if (!$this->shoppingCarts->contains($shoppingCart)) {
            $this->shoppingCarts->add($shoppingCart);
            $shoppingCart->setFactory($this);
        }

        return $this;
    }

    public function removeShoppingCart(ShoppingCart $shoppingCart): static
    {
        if ($this->shoppingCarts->removeElement($shoppingCart)) {
            // set the owning side to null (unless already changed)
            if ($shoppingCart->getFactory() === $this) {
                $shoppingCart->setFactory(null);
            }
        }

        return $this;
    }
}
