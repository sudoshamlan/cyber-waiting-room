// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uvezqeelcmrhbtohryhs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2ZXpxZWVsY21yaGJ0b2hyeWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxMjk3MzcsImV4cCI6MjA1ODcwNTczN30.YpumLreWi35VWpbWvnGqyeLHcLnqUlpbl_wQ8gOdsE8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);