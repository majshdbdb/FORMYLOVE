// Supabase Configuration - PAKAI CREDENTIALS KAMU
const supabaseUrl = 'https://bksguejdlekzodfonqce.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrc2d1ZWpkbGVrem9kZm9ucWNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NDQ5OTcsImV4cCI6MjA3NzEyMDk5N30.y2s2G1bM08wyVVDeVz35KWb5qtHIrml3QNFLnGmPQNY';

// Initialize Supabase as global variable
window.supabase = supabase.createClient(supabaseUrl, supabaseKey);
console.log('Supabase initialized successfully!');
