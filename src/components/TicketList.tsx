import React from 'react';
import { SupportTicket } from '../types/support';
import { AlertCircle, Clock, CheckCircle } from 'lucide-react';

interface TicketListProps {
  tickets: SupportTicket[];
}

const TicketList: React.FC<TicketListProps> = ({ tickets }) => {
  const getStatusIcon = (status: SupportTicket['status']) => {
    switch (status) {
      case 'open':
        return <AlertCircle className="text-red-500" size={20} />;
      case 'in_progress':
        return <Clock className="text-yellow-500" size={20} />;
      case 'resolved':
        return <CheckCircle className="text-green-500" size={20} />;
    }
  };

  const getPriorityColor = (priority: SupportTicket['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
    }
  };

  if (tickets.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
        No tickets found. Create one to get started!
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="divide-y divide-gray-200">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(ticket.status)}
                  <h3 className="text-lg font-medium text-gray-900">{ticket.title}</h3>
                </div>
                <p className="mt-2 text-gray-600">{ticket.description}</p>
                <div className="mt-4 flex items-center space-x-4 text-sm">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)} Priority
                  </span>
                  <span className="text-gray-500">{new Date(ticket.created_at).toLocaleDateString()}</span>
                  <span className="text-gray-500">{ticket.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;