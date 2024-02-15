import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

//import { createClient } from '@supabase/supabase-js'

//const supabaseUrl = 'https://xjiyniewbqcmhxggkqgk.supabase.co'
//const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqaXluaWV3YnFjbWh4Z2drcWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwNzQ3NDQsImV4cCI6MjAyMTY1MDc0NH0.w41fiKFZeAG8-VkXHqWSxuS2mg-sbY9uoxb4wnaXQnM";
//const supabase = createClient(supabaseUrl, supabaseKey)

//export default supabase;