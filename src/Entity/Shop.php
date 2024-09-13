<?php

namespace App\Entity;

use App\Repository\ShopRepository;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ShopRepository::class)]
class Shop
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $codeShop = null;

    #[ORM\ManyToOne(inversedBy: 'shops')]
    private ?User $user = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    /**
     * @var Collection<int, ShoppingCart>
     */
    #[ORM\OneToMany(targetEntity: ShoppingCart::class, mappedBy: 'shop')]
    private Collection $shoppingCarts;

    public function __construct()
    {
        $this->shoppingCarts = new ArrayCollection();
        $this -> createdAt = new DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodeShop(): ?string
    {
        return $this->codeShop;
    }

    public function setCodeShop(string $codeShop): static
    {
        $this->codeShop = $codeShop;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

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
            $shoppingCart->setShop($this);
        }

        return $this;
    }

    public function removeShoppingCart(ShoppingCart $shoppingCart): static
    {
        if ($this->shoppingCarts->removeElement($shoppingCart)) {
            // set the owning side to null (unless already changed)
            if ($shoppingCart->getShop() === $this) {
                $shoppingCart->setShop(null);
            }
        }

        return $this;
    }
}
