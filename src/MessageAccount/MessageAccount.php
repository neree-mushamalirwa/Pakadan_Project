<?php

namespace App\MessageAccount;

use App\Entity\Account;

class MessageAccount {

    public function __construct(
        private Account $account
    )
    {
        
    }

        

        /**
         * Get the value of account
         */ 
        public function getAccount()
        {
                return $this->account;
        }

        /**
         * Set the value of account
         *
         * @return  self
         */ 
        public function setAccount($account)
        {
                $this->account = $account;

                return $this;
        }
}

?>