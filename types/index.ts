export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface PestType {
  id: string;
  name: string;
  category: 'plumbing' | 'heating' | 'emergency' | 'installation';
  icon: string;
}

export interface Appointment {
  id: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  service_type: string;
  pest_types: string[];
  preferred_date: string;
  address: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: any; // Firebase Timestamp
  updated_at: any; // Firebase Timestamp
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'client';
  created_at: any; // Firebase Timestamp
}