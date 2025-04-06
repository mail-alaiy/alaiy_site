
import { ArrowLeft, ExternalLink, Mail, Phone } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import caseStudies from "../data/caseStudies";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudies.find(study => study.id === id);

  useEffect(() => {
    // If case study not found, redirect to case studies page
    if (!caseStudy) {
      navigate("/case-studies");
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [caseStudy, navigate]);

  if (!caseStudy) return null;

  return (
    <div className="py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
            
            <div className="mb-8">
              <span className="text-sm font-medium text-primary/80">Case Study</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4 text-primary">
                {caseStudy.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-700">
                {caseStudy.subheading}
              </h2>
            </div>
          </div>
          
          <div className="mb-12">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.name}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Client</h3>
              <p className="font-medium">{caseStudy.client}</p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Timeline</h3>
              <p className="font-medium">{caseStudy.timeline}</p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Project</h3>
              <p className="font-medium">{caseStudy.projectTitle}</p>
            </Card>
          </div>
          
          <div className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-primary">Requirements and Background</h2>
              <p className="text-gray-700 whitespace-pre-line">{caseStudy.requirements}</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-primary">Technical Solution</h2>
              <p className="text-gray-700 whitespace-pre-line">{caseStudy.technicalSolution}</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-primary">Key Highlights</h2>
              <ul className="space-y-4">
                {caseStudy.keyHighlights?.map((highlight, index) => (
                  <li key={index} className="flex">
                    <span className="bg-green-100 text-green-800 p-1 rounded-full mr-3 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-primary">Conclusion</h2>
              <p className="text-gray-700 whitespace-pre-line">{caseStudy.conclusion}</p>
            </section>
            
            {caseStudy.externalLinks && caseStudy.externalLinks.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-display font-bold mb-4 text-primary">Links</h2>
                <div className="flex flex-col gap-3">
                  {caseStudy.externalLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      {link.text}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  ))}
                </div>
              </section>
            )}
            
            <section className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-display font-bold mb-6 text-primary">Contact</h2>
              <p className="text-gray-700 mb-6 whitespace-pre-line">{caseStudy.contactInfo}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="w-full sm:w-auto">
                  <a href="mailto:pradyun@alaiy.com">
                    <Mail className="mr-2" />
                    Email Us
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href="tel:+919663928924">
                    <Phone className="mr-2" />
                    Call Us
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
