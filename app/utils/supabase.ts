import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://nsjnfbcxckcwomcpbbcs.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zam5mYmN4Y2tjd29tY3BiYmNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NDIzMTksImV4cCI6MjA4NjAxODMxOX0.4IY-OMcvtffW83_TNJx10TjEhdxCxR2Qp-0pznausD8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
