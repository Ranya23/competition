// app.js
// Moving the Supabase keys out of the main HTML file
window.AppConfig = {
    SUPABASE_URL: 'https://wmhuetfqmlpobbnsqorr.supabase.co/rest/v1/',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtaHVldGZxbWxwb2JibnNxb3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMzcxNTgsImV4cCI6MjA5OTcxMzE1OH0.f_a247jJYG2edXuAr4kNTqrbo03mbOXLEgCAmHkjgfU'
};

window.isConfigured = !window.AppConfig.SUPABASE_URL.includes('YOUR_SUPABASE_URL');
