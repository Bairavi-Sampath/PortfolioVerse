import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { submitWeb3Form } from "@/lib/web3forms";
import { Loader2, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be under 255 characters"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject must be under 150 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message must be under 3000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Prevent duplicate submissions
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const result = await submitWeb3Form({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      if (result.success) {
        setSubmitStatus("success");
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I will get back to you as soon as possible.",
        });
        reset();
      } else {
        setSubmitStatus("error");
        const msg = result.message || "Failed to deliver message. Please try again or reach out directly via email.";
        setErrorMessage(msg);
        toast({
          title: "Failed to send message",
          description: msg,
          variant: "destructive",
        });
      }
    } catch (err) {
      setSubmitStatus("error");
      const fallbackMsg = "A network error occurred. Please verify your internet connection and try again.";
      setErrorMessage(fallbackMsg);
      toast({
        title: "Network Error",
        description: fallbackMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-border/80 bg-card hover:border-primary/40 transition-all duration-300 shadow-md">
      <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary"></div>

      <CardHeader className="p-6 pb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick Inquiry Form</span>
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight text-foreground glow-text-cyan">
          Send Me a Message
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Have a question, project proposal, or collaboration opportunity? Leave a note below.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 pt-2">
        {/* Status Alerts */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-start gap-3 animate-fade-in text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Message delivered successfully!</p>
              <p className="text-xs mt-0.5 opacity-90">
                Your message has been sent to my inbox via Web3Forms. I will review it and reply shortly.
              </p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive flex items-start gap-3 animate-fade-in text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Submission encountered an error</p>
              <p className="text-xs mt-0.5 opacity-90">{errorMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Responsive row: Full Name and Email Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs sm:text-sm font-semibold text-foreground">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="e.g. John Doe"
                {...register("name")}
                disabled={isSubmitting}
                aria-invalid={errors.name ? "true" : "false"}
                className="bg-background/60 focus-visible:ring-primary/50 transition-colors"
              />
              {errors.name && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs sm:text-sm font-semibold text-foreground">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="e.g. john@example.com"
                {...register("email")}
                disabled={isSubmitting}
                aria-invalid={errors.email ? "true" : "false"}
                className="bg-background/60 focus-visible:ring-primary/50 transition-colors"
              />
              {errors.email && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-xs sm:text-sm font-semibold text-foreground">
              Subject <span className="text-destructive">*</span>
            </Label>
            <Input
              id="subject"
              placeholder="e.g. AI / ML Project Collaboration"
              {...register("subject")}
              disabled={isSubmitting}
              aria-invalid={errors.subject ? "true" : "false"}
              className="bg-background/60 focus-visible:ring-primary/50 transition-colors"
            />
            {errors.subject && (
              <p className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs sm:text-sm font-semibold text-foreground">
              Message <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              rows={5}
              {...register("message")}
              disabled={isSubmitting}
              aria-invalid={errors.message ? "true" : "false"}
              className="bg-background/60 focus-visible:ring-primary/50 transition-colors resize-y min-h-[120px]"
            />
            {errors.message && (
              <p className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-md transition-all duration-200 h-11"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
