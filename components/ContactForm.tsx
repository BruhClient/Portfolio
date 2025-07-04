"use client";

import React, { useRef, useTransition } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactPayload, ContactSchema } from "@/schemas/contact";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      message: "",
      email: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const handleSubmit = (values: ContactPayload) => {
    if (!formRef.current) return;

    startTransition(async () => {
      await emailjs
        .sendForm("service_mdbh1uc", "template_vlgc8le", formRef.current!, {
          publicKey: "jWUYfJ9jY4eJ7NXzG",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.reset();
          },
          (error) => {}
        );
    });
  };
  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Email Address" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter your message"
                  className="max-h-[500px] min-h-[300px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={isPending}>
          <Send /> Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
