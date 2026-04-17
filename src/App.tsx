import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import BiddingHall from './pages/BiddingHall';
import MyBids from './pages/MyBids';
import AIAssistant from './pages/AIAssistant';
import Profile from './pages/Profile';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'bidding':
        return <BiddingHall />;
      case 'ai':
        return <AIAssistant />;
      case 'mybids':
        return <MyBids />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}
