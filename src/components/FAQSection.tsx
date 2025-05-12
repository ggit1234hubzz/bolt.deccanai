import React, { useState } from 'react';
import { FAQItem } from '../types/support';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I reset my password?',
    answer: 'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions sent to your email.',
    category: 'Account',
  },
  {
    id: '2',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.',
    category: 'Billing',
  },
  {
    id: '3',
    question: 'How can I cancel my subscription?',
    answer: 'You can cancel your subscription at any time from your account settings. The cancellation will take effect at the end of your current billing period.',
    category: 'Billing',
  },
  {
    id: '4',
    question: 'Is there a mobile app available?',
    answer: 'Yes, our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store.',
    category: 'General',
  },
];

const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search FAQ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="space-y-4">
        {filteredFAQs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              onClick={() => toggleExpand(faq.id)}
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {expandedId === faq.id ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {expandedId === faq.id && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
                <span className="mt-2 inline-block px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded">
                  {faq.category}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;