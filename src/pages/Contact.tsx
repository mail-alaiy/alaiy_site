
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
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
  );
};

export default Contact;
