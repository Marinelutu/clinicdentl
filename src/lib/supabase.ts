import { createClient } from '@supabase/supabase-js';

// Fallback to placeholder values if env vars are missing to prevent crash
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder';

// Create client with potentially dummy values - will fail gracefully on network requests rather than crash app on launch
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

if (!import.meta.env.VITE_SUPABASE_URL) {
    console.warn('Supabase URL missing. Form submissions will fail. Please add VITE_SUPABASE_URL to .env.local');
}

// Database types
export interface Booking {
    id?: number;
    created_at?: string;
    name: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    service: string;
    message: string;
    status?: 'pending' | 'confirmed' | 'cancelled';
}

export interface ContactMessage {
    id?: number;
    created_at?: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    status?: 'new' | 'read' | 'replied';
}
