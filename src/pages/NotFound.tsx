
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative py-20 px-6"
      style={{ backgroundImage: 'url("/lovable-uploads/04ef8ab5-d6fd-4866-8dc5-4743d1e28091.png")' }}
    >
      <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
      <div className="bg-white rounded-lg p-8 md:p-12 shadow-xl max-w-md w-full z-10 text-center">
        <h1 className="text-6xl font-display font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
