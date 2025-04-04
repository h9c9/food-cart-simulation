import React from 'react';

export default function ActiveEvents() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Active Events</h2>
      <div className="space-y-3">
        <div className="p-2 bg-yellow-50 border border-yellow-200 rounded">
          <p className="font-medium text-yellow-800">Supplier Delay</p>
          <p className="text-xs text-yellow-700">Bread delivery delayed by 1 day</p>
        </div>
        <div className="p-2 bg-blue-50 border border-blue-200 rounded">
          <p className="font-medium text-blue-800">Local Festival</p>
          <p className="text-xs text-blue-700">Increased foot traffic expected tomorrow</p>
        </div>
      </div>
    </div>
  );
}
