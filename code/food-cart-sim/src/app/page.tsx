"use client";

import React from 'react';
import BusinessSummary from '../../components/dashboard/BusinessSummary';
import DailyPerformance from '../../components/dashboard/DailyPerformance';
import InventoryStatus from '../../components/dashboard/InventoryStatus';
import RecentTransactions from '../../components/dashboard/RecentTransactions';
import ActiveEvents from '../../components/dashboard/ActiveEvents';
import CustomerTraffic from '../../components/dashboard/CustomerTraffic';
import WeatherForecast from '../../components/dashboard/WeatherForecast';

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Food Cart Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Top row */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <BusinessSummary />
        </div>
        <div className="col-span-1">
          <WeatherForecast />
        </div>
        
        {/* Middle row */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <CustomerTraffic />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <InventoryStatus />
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <ActiveEvents />
        </div>
        
        {/* Bottom row */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <DailyPerformance />
        </div>
        <div className="col-span-1">
          <RecentTransactions />
        </div>
      </div>
      
      <div className="mt-6 flex justify-between">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          Run Business (1 Hour)
        </button>
        
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
          End Day
        </button>
      </div>
    </div>
  );
}
