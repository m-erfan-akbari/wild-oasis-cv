import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wjpuaurntawhyrgdhadj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqcHVhdXJudGF3aHlyZ2RoYWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2Nzc5OTMsImV4cCI6MjAxNjI1Mzk5M30.e9uTBb8TyIESNWskxPVmBzyu-IYb5tdYr1BbOwqFBRo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
