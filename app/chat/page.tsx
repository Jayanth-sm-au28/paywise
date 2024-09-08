"use client"
import { useState } from 'react';
import WebsiteDropdown from '../components/WebsiteDropdown';
import ChatInterface from '../components/ChatInterface';


const ChatPage = () => {
  const [selectedWebsite, setSelectedWebsite] = useState('');

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-semibold">Chat with AI based on Website Content</h1>
      <WebsiteDropdown onWebsiteSelect={setSelectedWebsite} />
      <ChatInterface selectedWebsite={selectedWebsite} />
    </div>
  );
};

export default ChatPage;
