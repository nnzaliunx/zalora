import { createClient } from "@supabase/supabase-js";

// Set environment variables
process.env.VITE_SUPABASE_URL = "https://ksmkklbymdfzjovecvyo.supabase.co";
process.env.VITE_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzbWtrbGJ5bWRmempvdmVjdnlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3Mzc4NDcsImV4cCI6MjAyNzMxMzg0N30.IKZEN_7NBEQGLnpfrk46xrs59eWT-v0B3WbOZ29BjeA";

// Access environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
