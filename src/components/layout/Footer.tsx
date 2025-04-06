
import { Mail, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  return <footer className="bg-primary text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">alaiy</h3>
            <p className="text-sm max-w-xs break-words">bringing crazy ideas to life with creativity and technology<br />AI Product Studio</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:pradyun@alaiy.com" className="flex items-center space-x-2 text-sm hover:text-secondary transition-colors">
                <Mail size={16} />
                <span>pradyun@alaiy.com</span>
              </a>
              <a href="https://g.co/kgs/UyPt93S" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm hover:text-secondary transition-colors">
                <MapPin size={16} />
                <span>IIM Bangalore</span>
              </a>
              <a href="https://www.linkedin.com/company/105324130/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm hover:text-secondary transition-colors">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Recognition</h3>
            <p className="text-sm">Incubated at NSRCEL</p>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://nsrcel.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block"
              >
                <img 
                  src="/lovable-uploads/eca2dbb8-34e5-43e4-97e6-4ee7262f4db0.png" 
                  alt="NSRCEL Logo" 
                  className="h-8 object-contain" 
                />
              </a>
              <a 
                href="https://g.co/kgs/UyPt93S" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block"
              >
                <img 
                  src="/lovable-uploads/bb2ba8c6-db79-4f55-8c39-76e71c3c1a84.png" 
                  alt="IIMB Logo" 
                  className="h-8 object-contain" 
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} alaiy. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
