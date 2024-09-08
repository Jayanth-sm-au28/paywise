"use client"
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userQueries, setUserQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      const res = await fetch('/api/queries');
      const data = await res.json();
      setUserQueries(data);
    };
    fetchQueries();
  }, []);

  return (
    <div>
      <h1>User Queries Analytics</h1>
      <ul>
        {userQueries.map((query:any) => (
          <li key={query._id}>{query.queryText} - {query.count}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
