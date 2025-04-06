import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import caseStudies from "../data/caseStudies";
import EmailModal from "./EmailModal";

const CaseStudies = () => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleOpenModal = (id: string) => {
    setOpenModalId(id);
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
  };

  const handleEmailSubmit = (email: string) => {
    if (openModalId) {
      navigate(`/case-studies/${openModalId}`);
      setOpenModalId(null);
    }
  };

  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary text-center">
            Case Studies
          </h1>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Explore the cool projects we have built for startups and enterprises
          </p>

          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden">
  <img
    src={study.image}
    alt={study.name}
    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 md:p-8 text-white">
                      <h2 className="text-2xl md:text-3xl font-display font-bold">
                        {study.name}
                      </h2>
                      <p className="text-lg text-white/90 mt-1">{study.subheading}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary/20 text-primary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{study.content}</p>
                  <button
                    onClick={() => handleOpenModal(study.id)}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group"
                  >
                    Read full case study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h3 className="text-2xl font-display font-bold mb-4 text-primary">Have an idea?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We can build technology to turn it into a reality
            </p>
            <a
              href="mailto:pradyun@alaiy.com"
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Let's have a chat
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Modal Logic */}
      {openModalId && (
        <EmailModal
          onClose={handleCloseModal}
          onSubmit={handleEmailSubmit}
          caseStudyId={openModalId}
        />
      )}
    </div>
  );
};

export default CaseStudies;
