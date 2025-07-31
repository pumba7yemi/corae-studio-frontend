
import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">corAe Studio</h2>
        <ul>
          <li className="mb-2">Dashboard</li>
          <li className="mb-2">Tasks</li>
          <li className="mb-2">Settings</li>
        </ul>
      </aside>
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">Welcome to corAe Studio</h1>
        <p>This is the base UI. Your logic will go here.</p>
      </main>
    </div>
  );
}

export default App;
