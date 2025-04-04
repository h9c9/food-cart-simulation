import React from 'react';

export default function DailyPerformance() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Daily Performance</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Revenue</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-right text-sm">$350.00</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Expenses</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <p className="text-right text-sm">$140.00</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Profit</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
          </div>
          <p className="text-right text-sm">$210.00</p>
        </div>
      </div>
    </div>
  );
}
