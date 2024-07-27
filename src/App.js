import React, { useState, useEffect } from 'react';
import AgeEstimator from './AgeEstimator';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import UploadOptions from './UploadOptions';
import NextPage from './NextPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('ageEstimator');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Listen for popstate event to handle the back button
    const handlePopState = () => {
      const path = window.location.pathname;
      switch (path) {
        case '/age-estimator':
          setCurrentPage('ageEstimator');
          break;
        case '/login-form':
          setCurrentPage('loginForm');
          break;
        case '/signup-form':
          setCurrentPage('signupForm');
          break;
        case '/upload-options':
          setCurrentPage('uploadOptions');
          break;
        case '/next-page':
          setCurrentPage('nextPage');
          break;
        default:
          setCurrentPage('ageEstimator');
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `/${page.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())}`);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    handleNavigation('nextPage'); // Navigate to the next page after selecting an image
  };

  return (
    <div>
      {currentPage === 'ageEstimator' && <AgeEstimator onNavigate={handleNavigation} />}
      {currentPage === 'loginForm' && <LoginForm onNavigate={handleNavigation} />}
      {currentPage === 'signupForm' && <SignupForm onNavigate={handleNavigation} />}
      {currentPage === 'uploadOptions' && <UploadOptions onImageSelect={handleImageSelect} />}
      {currentPage === 'nextPage' && (
        <NextPage selectedImage={selectedImage} onNavigate={handleNavigation} />
      )}
    </div>
  );
};

export default App;
