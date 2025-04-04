import React from 'react';

export default function WeatherForecast() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Weather Forecast</h2>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-2">☀️</div>
          <p className="text-2xl font-bold">72°F</p>
          <p className="text-sm text-gray-500">Sunny</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-xs text-gray-500">Tomorrow</p>
          <p className="text-sm">☁️ 68°F</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Day 3</p>
          <p className="text-sm">🌧️ 65°F</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Day 4</p>
          <p className="text-sm">☀️ 70°F</p>
        </div>
      </div>
    </div>
  );
}
