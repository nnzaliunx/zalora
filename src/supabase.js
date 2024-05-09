import { createClient } from "@supabase/supabase-js";

// Set environment variables
process.env.VITE_SUPABASE_URL = "https://tklhndtylrekoaudbjoo.supabase.co";
process.env.VITE_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrbGhuZHR5bHJla29hdWRiam9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyMjY3MDIsImV4cCI6MjAzMDgwMjcwMn0.NNpgrO1NA7j3gKmpdgq8WKqDIcpqv7IYtS40wWp3HvY";

// Access environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
