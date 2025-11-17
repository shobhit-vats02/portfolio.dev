import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative"
      id="contact"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-glow-violet mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <a
              href="mailto:shobhitvats020@gmail.com"
              className="flex items-center gap-3 glass p-4 rounded-lg hover:glass-strong hover:glow-blue transition-all group"
            >
              <Mail className="w-5 h-5 text-neon-blue group-hover:text-neon-cyan transition-colors" />
              <span>shobhitvats020@gmail.com</span>
            </a>

            <a
              href="tel:+918102075692"
              className="flex items-center gap-3 glass p-4 rounded-lg hover:glass-strong hover:glow-blue transition-all group"
            >
              <Phone className="w-5 h-5 text-neon-blue group-hover:text-neon-cyan transition-colors" />
              <span>+91 8102075692</span>
            </a>

            <div className="flex items-center gap-3 glass p-4 rounded-lg">
              <MapPin className="w-5 h-5 text-neon-blue" />
              <span>Vadodara, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neon-cyan">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/shobhit-vats02"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-lg hover:glass-strong hover:glow-blue transition-all"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shobhit-vats-babb55310/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-lg hover:glass-strong hover:glow-blue transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glass-strong p-8 rounded-2xl space-y-6 glow-violet"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="glass border-neon-blue/30 focus:border-neon-cyan focus:glow-blue transition-all"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="glass border-neon-blue/30 focus:border-neon-cyan focus:glow-blue transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="glass border-neon-blue/30 focus:border-neon-cyan focus:glow-blue transition-all min-h-[150px]"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button
            type="submit"
            className="w-full glass-strong glow-blue hover:scale-105 transition-transform text-lg py-6"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
