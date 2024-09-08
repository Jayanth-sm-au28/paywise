import Link from 'next/link';

const HomePage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold">Welcome to the Web Crawler and AI Chat System</h1>
    <div className="mt-8 space-x-4">
      <Link href="/chat" className="px-6 py-3 bg-blue-600 text-white rounded">
        Go to Chat
      </Link>
      <Link href="/dashboard" className="px-6 py-3 bg-green-600 text-white rounded">
        View Dashboard
      </Link>
    </div>
  </div>
);

export default HomePage;
