import React from 'react';

export default function BusinessSummary() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Business Summary</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Cash Balance</p>
          <p className="text-xl font-bold">$1,250.00</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Reputation</p>
          <p className="text-xl font-bold">★★★★☆</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Day</p>
          <p className="text-xl font-bold">Day 5</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Location</p>
          <p className="text-xl font-bold">Downtown</p>
        </div>
      </div>
    </div>
  );
}
