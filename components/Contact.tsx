import React from "react";
import { Badge } from "./ui/badge";
import { Phone, ContactIcon } from "lucide-react";
import ContactForm from "./ContactForm";
import { BoxReveal } from "./magicui/box-reveal";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center flex-col w-full items-center text-center gap-2">
        <Badge>
          <Phone />
          Contact
        </Badge>
        <div className="text-4xl font-bold">Get in Touch</div>
        <BoxReveal>
          <div>
            Want to learn more about me ? Have a job opportunity ? Im open to
            all !
          </div>
        </BoxReveal>
      </div>
      <div className="pt-4" id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
