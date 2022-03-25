import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Form from './pages/Form';

const {PUBLIC_URL} = process.env;

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Renders component corresponding to current page
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Form />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <footer>
        <img src={PUBLIC_URL + ""} alt="" /> 
        <a href="" target="" rel=""><img src={PUBLIC_URL + ""} alt="" /></a>
        <a href="" target="_blank" rel=""><img src={PUBLIC_URL + ""} alt="" /></a>
        <a href="mailto:kolatham96@gmail.com"><img src={PUBLIC_URL + ""} alt="" /></a>
      </footer>
    </div>
  );
}