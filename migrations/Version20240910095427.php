<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240910095427 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE shopping_cart ADD factory_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE shopping_cart ADD CONSTRAINT FK_72AAD4F6C7AF27D2 FOREIGN KEY (factory_id) REFERENCES factory (id)');
        $this->addSql('CREATE INDEX IDX_72AAD4F6C7AF27D2 ON shopping_cart (factory_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE shopping_cart DROP FOREIGN KEY FK_72AAD4F6C7AF27D2');
        $this->addSql('DROP INDEX IDX_72AAD4F6C7AF27D2 ON shopping_cart');
        $this->addSql('ALTER TABLE shopping_cart DROP factory_id');
    }
}
