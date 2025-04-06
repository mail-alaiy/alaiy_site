import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const API_ENDPOINT = import.meta.env.VITE_NOCODEAPI_ENDPOINT;

const sendEmailToUser = (email: string, caseStudyId: string): Promise<EmailJSResponseStatus> => {
  const templateParams = {
    email,
    case_study_id: caseStudyId,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};

interface Props {
  onClose: () => void;
  onSubmit: (email: string) => void;
  caseStudyId: string;
}

const EmailModal = ({ onClose, onSubmit, caseStudyId }: Props): JSX.Element => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (): Promise<void> => {
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    setLoading(true);
    try {
      // Send email to user
      await sendEmailToUser(email, caseStudyId);

      // Log email and caseStudyId to Google Sheet
      await fetch(`${API_ENDPOINT}?tabId=Sheet1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[email, caseStudyId]]), // 2D array as required
      });

      onSubmit(email);
      navigate(`/case-studies/${caseStudyId}`);
    } catch (error) {
      console.error("Failed to send email or log to sheet:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
        <button
          aria-label="Close modal"
          className="absolute top-3 right-4 text-gray-400 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <p className="mb-4 text-gray-600">Enter your email to read the full case study:</p>
        <input
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          placeholder="you@example.com"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 w-full"
        >
          {loading ? "Submitting..." : "Submit & Continue"}
        </button>
      </div>
    </div>
  );
};

export default EmailModal;
