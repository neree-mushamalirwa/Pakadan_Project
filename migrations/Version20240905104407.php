<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240905104407 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact ADD factory_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E638C7AF27D2 FOREIGN KEY (factory_id) REFERENCES factory (id)');
        $this->addSql('CREATE INDEX IDX_4C62E638C7AF27D2 ON contact (factory_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E638C7AF27D2');
        $this->addSql('DROP INDEX IDX_4C62E638C7AF27D2 ON contact');
        $this->addSql('ALTER TABLE contact DROP factory_id');
    }
}
