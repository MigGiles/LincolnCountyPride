
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { handleMailingListSignup } from "@/app/actions";
import { Mail } from "lucide-react";

const MailingListSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});
type MailingListValues = z.infer<typeof MailingListSchema>;

export default function MailingListSignup() {
  const { toast } = useToast();
  const form = useForm<MailingListValues>({
    resolver: zodResolver(MailingListSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: MailingListValues) {
    try {
      const result = await handleMailingListSignup(data.email);
      if (result.success) {
        toast({
          title: "Subscribed!",
          description: result.message || "You've been added to our mailing list. Thank you!",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message || "Could not subscribe. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2 items-start w-full max-w-md">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="your.email@example.com" {...field} className="pl-10" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 h-10 mt-0">
          Sign Up
        </Button>
      </form>
    </Form>
  );
}
