import React from 'react';

export default function CustomerTraffic() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Customer Traffic</h2>
      <div className="flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border-8 border-blue-500 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold">Medium</p>
            <p className="text-xs text-gray-500">Current</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Peak hours expected between 12:00 - 14:00</p>
      </div>
    </div>
  );
}
