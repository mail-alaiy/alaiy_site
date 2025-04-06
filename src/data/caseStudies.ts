
export interface CaseStudy {
  id: string;
  name: string;
  subheading: string;
  image: string;
  content: string;
  link: string;
  tags: string[];
  
  // Additional fields for detailed view
  client?: string;
  timeline?: string;
  projectTitle?: string;
  requirements?: string;
  technicalSolution?: string;
  keyHighlights?: string[];
  conclusion?: string;
  contactInfo?: string;
  externalLinks?: { text: string; url: string }[];
}

import neuratrialImage from "./images/Neuratrial.jpg";
import agripredictImage from "./images/Agripredict.jpg";
import salaarImage from "./images/Salaar.jpg";

// Sample case studies data
const caseStudies: CaseStudy[] = [
  {
    id: "neuratrial",
    name: "Neuratrial",
    subheading: "Advanced RAG on 1 Million Biomedical Research Papers",
    image: neuratrialImage,
    content: "Biomedical researchers spend thousands of hours reviewing research papers before drafting a clinical trial protocol—an essential first step in drug discovery. Neuratrial, an AI-powered system developed by Alaiy, streamlines this process by enabling fast retrieval of biomedical insights and automated protocol generation.",
    link: "/case-studies/neuratrial",
    tags: ["AI", "RAG", "Healthcare"],
    client: "Singapore based startup",
    timeline: "Mar - Dec 2024",
    projectTitle: "AI Enabled Biomedical Research",
    requirements: "We built this for a Singapore-based startup that aims to change the way medical research works by reducing the time taken to draft clinical trial protocols. Their challenge was the overwhelming volume of medical literature, requiring a smart solution to automate information retrieval and protocol generation while maintaining accuracy and most importantly security.",
    technicalSolution: "The system integrates Advanced RAG, GPT-4o Mini, and DeepSeek Reasoning models, leveraging QDrant Database, MongoDB, AWS, and Llama Cloud for scalable, real-time document retrieval. It processes over 1 million biomedical papers from both public and private sources, using Jina Web Search to enhance web-based queries. The entire system was built with high security standards, rigorous testing via RAGAs framework, and deployed on AWS cloud infrastructure with auto-scaling.",
    keyHighlights: [
      "Intelligent Document Search & Web Retrieval – Researchers can search with source tracking for reliable citations.",
      "Automated Clinical Trial Protocol Generation – AI drafts the first version, reducing human effort significantly.",
      "Robust, Secure, & Scalable System – Minimized hallucinations, tested rigorously for medical accuracy."
    ],
    conclusion: "Neuratrial successfully accelerates the decision-making process in medical research, providing a well-tested, reliable, and scalable AI-powered system. By minimizing human effort and enhancing accuracy, this innovation is paving the way for faster drug discovery.\nOne of the most exciting moments in this project was testing real-world queries and seeing our model extract insights that would have taken weeks manually!\nBuilding a system that can edit and handle section wise dependencies in a document generation was a hard problem to solve.",
    contactInfo: "Looking to build an AI product for your enterprise?\npradyun@alaiy.com / +91 9663928924",
    externalLinks: [
      {
        text: "View Live Project",
        url: "https://www.neuratrial.com/"
      },
    ]
  },
  {
    id: "agripredict",
    name: "AgriPredict",
    subheading: "Machine Learning Model for Commodity Price Forecasting",
    image: agripredictImage,
    content: "Spices and commodities prices are highly volatile, and their unpredictable prices can significantly impact large-volume trades. AgriPredict, an ML-driven forecasting tool, analyzes 10 years of agricultural data across 400+ Indian markets to predict price trends, helping traders make informed buying, storing, and selling decisions.",
    link: "/case-studies/agripredict",
    tags: ["Machine Learning", "Data Analytics", "Agriculture"],
    client: "IIM Bangalore Alumni Company",
    timeline: "Nov 2024 - Jan 2025",
    projectTitle: "Helping Traders & Farmers Make Data Driven Decisions",
    requirements: "Our client, an IIM Bangalore alumnus, running a D2C spices brand in Hyderabad, needed a data-driven approach to predict commodity prices. Previously, price estimations were based on manually collected information from WhatsApp groups and multiple unreliable sources. The challenge was to clean, structure, and automate data collection while integrating various external sources for accurate forecasting.",
    technicalSolution: "The system leverages XGBoost, ARIMA, SARIMA, and SARIMAX models to analyze price variations based on sowing patterns, yield volumes, seasonality, import/export trends, and more. Data is collected via APIs, automated scrapers, and manual CSV uploads, stored in MongoDB, and processed for short-term (two weeks, one month) and long-term (three months, one year, five years) plotting. Built using React.js and Vercel, the platform ensures seamless user experience and scalability.",
    keyHighlights: [
      "Multi-Horizon Price Forecasting – Traders can view price trends across various timeframes from weeks to years.",
      "Automated Data Collection & Processing – Scrapers and APIs update live data in real-time, ensuring accuracy.",
      "Scalable AI Model for New Commodities – The cloud-hosted infrastructure allows easy expansion to new markets."
    ],
    conclusion: "Building machine learning models for commodity trading is complex due to diverse parameters influencing price and volume. AgriPredict was rigorously tested against state-of-the-art benchmarks and delivered price forecasts with strong correlations to real-world trading performance. Traders and commodity analysts have provided excellent feedback, acknowledging its impact in optimizing trade decisions.\nOne of the most rewarding aspects of this project was seeing the tool outperform traditional manual forecasting methods, giving traders data-driven confidence in market fluctuations!",
    contactInfo: "Looking to build an AI product for your enterprise?\npradyun@alaiy.com / +91 9663928924",
    externalLinks: [
      {
        text: "View Live Project",
        url: "https://www.agripredict.in/"
      },
    ]
  },
  {
    id: "salaar",
    name: "Salaar Fan Army",
    subheading: "India's Biggest Digital Fan Experience Campaign",
    image: salaarImage,
    content: "We developed an AI-powered fan engagement platform that introduced AR/VR filters, gamification, and an AI video pipeline for the highly anticipated Pan-Indian film Salaar. The campaign aimed to boost social media engagement, increase organic mentions, and build excitement ahead of the film's release. This was the first-of-its-kind AI-driven fan campaign for a movie in India and was featured in over 200 media publications as a groundbreaking approach to film promotion.",
    link: "/case-studies/salaar",
    tags: ["AR/VR", "Social Media", "Entertainment"],
    client: "Homable Film Production House",
    timeline: "Oct 2023 to Dec 2023",
    projectTitle: "AI Enabled Digital Film Promotion Campaign",
    requirements: "Hombale Films, the production house behind India's biggest films the KGF franchisee, Kantara and Salaar: Part 1 - Ceasefire, wanted to create an interactive and immersive online experience that would keep fans engaged while leveraging social media traction to promote their film. The goal was to ensure that fans actively participated in the digital campaign, leading to a massive viral effect. The campaign allowed fans to join the Salaar Fan Army by using AR/VR filters and generating personalized digital fan cards, which could be shared across social media platforms. Users were also incentivized with exclusive merchandise and ticket discounts.",
    technicalSolution: "The platform was built using: Frontend: ReactJS, Tailwind CSS\nBackend & Hosting: AWS EC2 & S3, Vercel, Autoscale\nAI & Video Processing: MoviePy, Azure Vision\nAR Filters: Meta Spark AR Studio\nScalability: AWS Auto Scale Pipeline (custom-built to handle heavy traffic)\nKey functionalities included:\n✅ AR/VR filters deployed on Hombale Films' official Instagram channel.\n✅ Fan-generated images processed to create customized fan army cards with unique IDs.\n✅ Seamless integration with social media, allowing fans to share their personalized content.\nIncentive-based system where Fan Army IDs unlocked exclusive rewards like ticket discounts and merchandise. Scalable AWS infrastructure that handled surges in traffic, scaling from 20,000 visitors to 167,000 concurrent users.",
    keyHighlights: [
      "A Unique AI-Driven Engagement Platform",
      "Record-Breaking Engagement: Over 2 million site visits, making it the most successful digital campaign for an Indian film.",
      "Gamification & Personalization: Fans could generate a custom fan army ID card and participate in exclusive promotions."
    ],
    conclusion: "The Salaar Fan Experience set a new benchmark for digital film promotions in India. The campaign's biggest challenge was developing a scalable infrastructure that could handle unpredictable surges in traffic while supporting heavy image processing tasks. Another technical feat was the creation of unique fan army ID cards, dynamically embedding users' names and ID numbers. The most significant moment came when lead actor Prabhas shared the campaign, leading to a spike in engagement. This project successfully combined AI, AR/VR, and gamification, making it an industry-first in film marketing.",
    contactInfo: "Looking to build an AI product for your enterprise?\npradyun@alaiy.com / +91 9663928924",
    externalLinks: [
      {
        text: "Twitter Announcement",
        url: "https://x.com/hombalefilms/status/1728689047902851247"
      },
      {
        text: "Zee News Coverage",
        url: "https://zeenews.india.com/regional/prabhas-salaar-creates-unprecedented-fan-army-in-over-70-cities-across-country-2692551.html"
      },
      {
        text: "The Print Coverage",
        url: "https://theprint.in/ani-press-releases/salaar-fan-army-campaign-by-athvie/1892146/"
      }
    ]
  }
];

export default caseStudies;
