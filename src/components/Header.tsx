import React from 'react';
import { TicketIcon, BookOpen, MessageCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: 'tickets' | 'faq' | 'chat';
  onTabChange: (tab: 'tickets' | 'faq' | 'chat') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
            Customer Support
          </h1>
          
          <nav className="flex space-x-1">
            <button
              onClick={() => onTabChange('tickets')}
              className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-colors
                ${activeTab === 'tickets' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <TicketIcon size={20} />
              <span>Tickets</span>
            </button>
            
            <button
              onClick={() => onTabChange('faq')}
              className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-colors
                ${activeTab === 'faq' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <BookOpen size={20} />
              <span>FAQ</span>
            </button>
            
            <button
              onClick={() => onTabChange('chat')}
              className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-colors
                ${activeTab === 'chat' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <MessageCircle size={20} />
              <span>Chat</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;