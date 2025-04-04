import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Food Cart Management Simulation
        </h1>
        
        <p className="text-gray-600 mb-8 text-center">
          An educational simulation for learning business management principles through operating a virtual food cart.
        </p>
        
        <div className="space-y-4">
          <Link href="/dashboard" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center">
            Start New Game
          </Link>
          
          <button className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded text-center">
            Load Saved Game
          </button>
          
          <Link href="/testing" className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded text-center">
            Testing Mode
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500 text-center">
          <p>Developed for Manning management students</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
