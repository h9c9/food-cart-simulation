// Type definitions for Food Cart Management Simulation

// Game entity types
export interface Game {
  id: string;
  userId: string;
  name: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  createdAt: Date;
  lastSaved: Date;
  gameDay: number;
  cashBalance: number;
  reputation: number;
  inventory: InventoryItem[];
  menuItems: MenuItem[];
  staff: StaffMember[];
  foodCart: FoodCart;
  weather: Weather;
  transactions: Transaction[];
  financialRecords: FinancialRecord[];
  events: GameEvent[];
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'ingredient' | 'supply' | 'equipment';
  quantity: number;
  unit: string;
  unitCost: number;
  expirationDays: number | null;
  purchasedOn: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  cost: number;
  category: 'main' | 'side' | 'drink' | 'dessert';
  ingredients: MenuItemIngredient[];
  popularity: number;
  isAvailable: boolean;
}

export interface MenuItemIngredient {
  inventoryItemId: string;
  quantity: number;
}

export interface StaffMember {
  id: string;
  name: string;
  role: 'cook' | 'cashier' | 'manager';
  skillLevel: number;
  hourlyWage: number;
  morale: number;
  hiredOn: number;
  schedule: StaffSchedule[];
}

export interface StaffSchedule {
  day: number;
  startHour: number;
  endHour: number;
}

export interface FoodCart {
  id: string;
  name: string;
  location: Location;
  capacity: number;
  condition: number;
  equipmentLevel: number;
}

export interface Location {
  id: string;
  name: string;
  type: 'downtown' | 'campus' | 'park' | 'residential' | 'business';
  footTraffic: number;
  rentCost: number;
  customerDemographics: CustomerDemographics;
}

export interface CustomerDemographics {
  businessPeople: number;
  students: number;
  tourists: number;
  residents: number;
}

export interface Weather {
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy';
  temperature: number;
  impact: number;
}

export interface Transaction {
  id: string;
  type: 'sale' | 'expense' | 'investment';
  amount: number;
  description: string;
  gameDay: number;
  gameTime: string;
  items?: TransactionItem[];
}

export interface TransactionItem {
  menuItemId: string;
  quantity: number;
  price: number;
}

export interface FinancialRecord {
  gameDay: number;
  revenue: number;
  expenses: number;
  profit: number;
  cashBalance: number;
}

export interface GameEvent {
  id: string;
  type: 'weather' | 'supplier' | 'staff' | 'customer' | 'opportunity' | 'challenge';
  title: string;
  description: string;
  impact: EventImpact;
  startedOn: number;
  duration: number | null;
  isActive: boolean;
  options?: EventOption[];
}

export interface EventImpact {
  cashBalance?: number;
  reputation?: number;
  customerTraffic?: number;
  inventoryItems?: {id: string, change: number}[];
  staffMorale?: number;
}

export interface EventOption {
  id: string;
  description: string;
  impact: EventImpact;
}

// Game state types
export interface GameState {
  game: Game | null;
  isLoading: boolean;
  error: string | null;
}

// Game settings types
export interface GameSettings {
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  startingCash: number;
  startingReputation: number;
  customerTrafficMultiplier: number;
  expenseMultiplier: number;
  eventFrequency: number;
}

// Customer types
export interface Customer {
  id: string;
  type: 'businessPerson' | 'student' | 'tourist' | 'resident';
  preferences: CustomerPreferences;
  budget: number;
  patience: number;
}

export interface CustomerPreferences {
  priceImportance: number;
  qualityImportance: number;
  speedImportance: number;
  favoriteCategories: string[];
}

// Simulation types
export interface SimulationStep {
  type: 'customer' | 'weather' | 'event' | 'staff' | 'inventory';
  action: string;
  data: any;
}

export interface SimulationResult {
  transactions: Transaction[];
  events: GameEvent[];
  inventoryChanges: {id: string, change: number}[];
  staffChanges: {id: string, change: number}[];
  reputationChange: number;
}
