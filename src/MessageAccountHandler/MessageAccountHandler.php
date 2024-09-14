<?php

namespace App\MessageAccountHandler;

use App\MessageAccount\MessageAccount;
use App\MessageContact\MessageContact;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;
use Symfony\Component\Mime\Email;

#[AsMessageHandler()]
class MessageAccountHandler {

    public function __construct(
        private MailerInterface $mailer
    )
    {
        
    }
    
    public function __invoke(MessageAccount $messageAccount)
    {
        $email = (new Email())
            ->from('nereemushamalirwabm@gmail.com')
            ->to($messageAccount -> getAccount() -> getEmail())
            //->cc('cc@example.com')
            //->bcc('bcc@example.com')
            //->replyTo('fabien@example.com')
            //->priority(Email::PRIORITY_HIGH)
            ->subject("Activation du compte")
            ->text($messageAccount -> getAccount() -> getMessage())
            ;

        $this -> mailer->send($email);
    }
}

?>