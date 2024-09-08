import { useState, useEffect } from 'react';

const WebsiteDropdown = ({ onWebsiteSelect }: { onWebsiteSelect: (website: string) => void }) => {
  const [websites, setWebsites] = useState<string[]>([]);

  useEffect(() => {
    const fetchWebsites = async () => {
      const res = await fetch('/api/crawl');
      const data = await res.json();
      setWebsites(data.websites);
    };

    fetchWebsites();
  }, []);

  return (
    <div className="mt-4">
      <label htmlFor="website-select" className="block mb-2">Select Website:</label>
      <select id="website-select" onChange={(e) => onWebsiteSelect(e.target.value)} className="border p-2">
        <option value="">Choose a website...</option>
        {websites.map((website, index) => (
          <option key={index} value={website}>{website}</option>
        ))}
      </select>
    </div>
  );
};

export default WebsiteDropdown;
