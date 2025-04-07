import { Mail, Phone } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const sendEmailToUser = (email: string): Promise<EmailJSResponseStatus> => {
  const templateParams = { email };
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};

const Contact = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (): Promise<void> => {
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    setLoading(true);
    try {
      await sendEmailToUser(email);
      alert("Email sent successfully!");
      setEmail(""); // clear input
    } catch (err) {
      console.error("Error sending email:", err);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-display font-bold mb-12 text-center">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-primary">Contact</h2>
              <div className="space-y-4">
                <p className="font-medium">Pradyun P Rao, Founder</p>
                <div className="flex items-center space-x-2">
                  <Mail size={18} className="text-primary" />
                  <a href="mailto:pradyun@alaiy.com" className="hover:text-primary transition-colors">
                    pradyun@alaiy.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={18} className="text-primary" />
                  <span>+91 9663928924</span>
                </div>
                <div>
                  <a 
                    href="https://wa.me/919663928924"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hiring Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-primary">Hiring</h2>
              <div className="space-y-4">
                <p>We are always on the look out for great folks to work with us.</p>
                <p>Fill in this form and we'll get in touch:</p>
                <div>
                  <a 
                    href="https://tally.so/r/3qzYoO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <span>Apply Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="pt-12 pb-4 px-6 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
            Ready to build your next AI product with us?
          </h2>

          <div className="flex flex-col md:flex-row gap-3 justify-center items-center max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
            <button
              className="bg-white text-primary p-2 rounded-full hover:bg-secondary transition-colors flex-shrink-0"
              aria-label="Submit email"
              onClick={handleSubmit}
              disabled={loading}
            >
              <Check size={20} />
            </button>
          </div>

          <a
            href="mailto:pradyun@alaiy.com"
            className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-secondary transition-colors inline-flex items-center"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
