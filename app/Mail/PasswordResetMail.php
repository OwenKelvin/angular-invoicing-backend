<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PasswordResetMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $reset_link;
    public $school_name;


    /**
     * Create a new message instance.
     *
     * @param $message_body
     */
    public function __construct($message_body)
    {
        $this->name = $message_body['name'];
        $this->reset_link = $message_body['reset_link'];
        $this->school_name = $message_body['school_name'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.password_reset');
    }
}
