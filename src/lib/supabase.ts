import { createClient } from "@supabase/supabase-js";

// Retrieve the Supabase configuration variables
const metaEnv = (import.meta as any).env || {};
const supabaseUrl = metaEnv.VITE_SUPABASE_URL || "";
const supabaseAnonKey = metaEnv.VITE_SUPABASE_ANON_KEY || "";

// We check if either of the keys are missing or contain placeholder text
export const isSupabaseConfigured = (): boolean => {
  if (!supabaseUrl || !supabaseAnonKey) return false;
  if (supabaseUrl.includes("your-supabase") || supabaseAnonKey.includes("your-supabase")) return false;
  return true;
};

// Lazy creation/export of the Supabase client
let supabaseClientInstance: ReturnType<typeof createClient> | null = null;

export const getSupabase = () => {
  if (!isSupabaseConfigured()) {
    return null;
  }
  if (!supabaseClientInstance) {
    supabaseClientInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseClientInstance;
};
