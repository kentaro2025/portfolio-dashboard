"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Link,
  Send,
  MessageCircle,
  Loader2,
} from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        description:
          error instanceof Error
            ? error.message
            : "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "qteeprograming@gmail.com",
      href: "mailto:qteeprograming@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+1 (732) 217-7702",
      href: "tel:+17322177702",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Little Ferry, New Jersey, United States",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/Songark",
    },
    {
      icon: <Link className="h-5 w-5" />,
      label: "Resume",
      href: "https://resume.io/r/Ycz7zlA17",
    },
    {
      icon: <Send className="h-5 w-5" />,
      label: "Telegram",
      href: "https://t.me/technician4you",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kentaro-namba-37797a399/",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Discord",
      href: "https://discord.com/users/kentaro2020",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to discuss your next project? Let's connect and explore how we
            can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                Whether you need a complex system architecture, performance
                optimization, or cutting-edge AI integration, I'm here to help
                turn your vision into reality.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-heading font-medium text-lg text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link, index) => (
                  <Button key={index} variant="outline" size="sm" asChild className="flex-shrink-0">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                      <span className="ml-2 hidden sm:inline">{link.label}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
