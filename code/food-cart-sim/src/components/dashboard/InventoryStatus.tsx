import React from 'react';

export default function InventoryStatus() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Inventory Status</h2>
      <div className="space-y-2">
        <div>
          <div className="flex justify-between">
            <span className="text-sm">Bread</span>
            <span className="text-sm font-medium">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <span className="text-sm">Cheese</span>
            <span className="text-sm font-medium">45%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <span className="text-sm">Tomatoes</span>
            <span className="text-sm font-medium">15%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-red-600 h-2 rounded-full" style={{ width: '15%' }}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <span className="text-sm">Lettuce</span>
            <span className="text-sm font-medium">60%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
