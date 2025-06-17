"use client";

import React, { useRef, useTransition } from "react";
import {
  Form,
  FormControl,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import SocialLinks from "./SocialLinks";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const form = useForm<ContactPayload>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      subject: "",
      message: "",
      email: "",
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: ContactPayload) => {
    if (!formRef.current) return;

    startTransition(async () => {
      await emailjs
        .sendForm("service_mdbh1uc", "template_vlgc8le", formRef.current!, {
          publicKey: "jWUYfJ9jY4eJ7NXzG",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            form.reset();
          }
        );
      toast("Thank you for reaching out to me !", {
        description: "Ill get back to you as soon as possible",
      });
    });
  };
  return (
    <Card>
      <CardHeader>
        <div className="text-center">
          <CardTitle className="text-3xl font-semibold">
            Let's get in touch.
          </CardTitle>
          <CardDescription className="pt-2 text-sm">
            Have more enquiries ? Contact me !
          </CardDescription>
        </div>
        <div className="flex justify-center pt-2">
          <SocialLinks />
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="py-3 space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="w-full min-h-[300px] max-h-[500px]"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isPending}>
              Submit
              <Send />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
