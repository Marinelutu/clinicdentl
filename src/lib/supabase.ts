import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
