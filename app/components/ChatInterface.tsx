import { useState } from 'react';

const ChatInterface = ({ selectedWebsite }: { selectedWebsite: string }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = async () => {
    const res = await fetch('/api/ai', {
      method: 'POST',
      body: JSON.stringify({ query, website: selectedWebsite }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    console.log("vdata",res)
    setResponse(data.answer);
  };

  return (
    <div className="mt-8">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your question here"
        className="w-full p-2 border"
      />
      <button onClick={handleQuery} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Submit Query
      </button>
      {response && <p className="mt-4">{response}</p>}
    </div>
  );
};

export default ChatInterface;
