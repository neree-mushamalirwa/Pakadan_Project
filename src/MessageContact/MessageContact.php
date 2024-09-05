<?php

namespace App\MessageContact;

use App\Entity\Contact;

class MessageContact {

    public function __construct(
        private Contact $contact
    )
    {
        
    }

        /**
         * Get the value of contact
         */ 
        public function getContact()
        {
                return $this->contact;
        }

        /**
         * Set the value of contact
         *
         * @return  self
         */ 
        public function setContact($contact)
        {
                $this->contact = $contact;

                return $this;
        }
}

?>