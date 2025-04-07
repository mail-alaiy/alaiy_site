import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const sendEmailToUser = (email: string): Promise<EmailJSResponseStatus> => {
  const templateParams = { email };
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};

const Home = () => {
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: 'url("/lovable-uploads/04ef8ab5-d6fd-4866-8dc5-4743d1e28091.png")' }}>
        <div className="absolute inset-0 water-animation"></div>
        <div className="absolute inset-0 bg-primary bg-opacity-40"></div>
        <div className="container mx-auto px-6 z-10 text-center">
          <div className="animate-fade-in">
            <img src="/lovable-uploads/fbc9e220-bd89-4207-9c00-839ec4a44103.png" alt="alaiy" className="mx-auto mb-8 w-64 md:w-80" />
            <h2 className="text-white text-xl md:text-2xl font-sans font-medium mb-12 max-w-3xl mx-auto">
              bringing crazy ideas to life with creativity and technology
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <Link to="/blogs" className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors inline-flex items-center justify-center max-w-[200px] mx-auto md:mx-0">
                blogs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="mailto:pradyun@alaiy.com" className="bg-transparent text-white border border-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors max-w-[200px] mx-auto md:mx-0">
                contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary">We build AI Products</h2>
            <p className="text-lg leading-relaxed mb-8">We are a team of 10x developers and designers who solve real world problems with the best technology.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { title: "Speed", desc: "We build things, we break things, we work fast." },
                { title: "Quality", desc: "We build things that are 10 times as good as anything else." },
                { title: "Impact", desc: "We build things that make a difference to people's lives." },
              ].map((card, idx) => (
                <div key={idx} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-display font-semibold mb-3 text-primary">{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
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

export default Home;
