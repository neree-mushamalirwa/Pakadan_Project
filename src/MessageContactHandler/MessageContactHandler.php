<?php

namespace App\MessageContactHandler;

use App\MessageContact\MessageContact;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Mime\Email;

#[AsMessageHandler()]
class MessageContactHandler {

    public function __construct(
        private MailerInterface $mailer
    )
    {
        
    }
    
    public function __invoke(MessageContact $messageContact)
    {
        $email = (new Email())
            ->from('nereemushamalirwabm@gmail.com')
            ->to($messageContact -> getContact() -> getEmail())
            //->cc('cc@example.com')
            //->bcc('bcc@example.com')
            //->replyTo('fabien@example.com')
            //->priority(Email::PRIORITY_HIGH)
            ->subject($messageContact -> getContact() -> getSujet())
            ->text($messageContact -> getContact() -> getMessage())
            ;

        $this -> mailer->send($email);
    }
}

?>