import React, { useState } from 'react';
import Header from './components/Header';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';
import FAQSection from './components/FAQSection';
import ChatSupport from './components/ChatSupport';
import { SupportTicket } from './types/support';

function App() {
  const [activeTab, setActiveTab] = useState<'tickets' | 'faq' | 'chat'>('tickets');
  const [tickets, setTickets] = useState<SupportTicket[]>([]);

  const handleTicketSubmit = (ticket: Omit<SupportTicket, 'id' | 'created_at' | 'user_id'>) => {
    const newTicket: SupportTicket = {
      ...ticket,
      id: Math.random().toString(36).substr(2, 9),
      created_at: new Date().toISOString(),
      user_id: 'demo-user',
    };
    setTickets([newTicket, ...tickets]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {activeTab === 'tickets' && (
          <div className="space-y-8">
            <TicketForm onSubmit={handleTicketSubmit} />
            <TicketList tickets={tickets} />
          </div>
        )}
        
        {activeTab === 'faq' && <FAQSection />}
        
        {activeTab === 'chat' && <ChatSupport />}
      </main>
    </div>
  );
}

export default App;