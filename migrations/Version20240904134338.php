<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240904134338 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product_category ADD factory_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE product_category ADD CONSTRAINT FK_CDFC7356C7AF27D2 FOREIGN KEY (factory_id) REFERENCES factory (id)');
        $this->addSql('CREATE INDEX IDX_CDFC7356C7AF27D2 ON product_category (factory_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE product_category DROP FOREIGN KEY FK_CDFC7356C7AF27D2');
        $this->addSql('DROP INDEX IDX_CDFC7356C7AF27D2 ON product_category');
        $this->addSql('ALTER TABLE product_category DROP factory_id');
    }
}
