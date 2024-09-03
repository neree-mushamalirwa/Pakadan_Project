<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240902232819 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE factory (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, category_item_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, image_name LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', description LONGTEXT NOT NULL, INDEX IDX_FB361EF912469DE2 (category_id), INDEX IDX_FB361EF9D5B71220 (category_item_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE factory ADD CONSTRAINT FK_FB361EF912469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE factory ADD CONSTRAINT FK_FB361EF9D5B71220 FOREIGN KEY (category_item_id) REFERENCES category_item (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE factory DROP FOREIGN KEY FK_FB361EF912469DE2');
        $this->addSql('ALTER TABLE factory DROP FOREIGN KEY FK_FB361EF9D5B71220');
        $this->addSql('DROP TABLE factory');
    }
}
