// 1. Masukkan kunci dari Supabase Anda
const SUPABASE_URL = 'https://zskmocqollgwaeubsljb.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_WuY2rB3w6s6Il0B0Id0bYw_KmTn_eMLeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpza21vY3FvbGxnd2FldWJzbGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxODM5MTksImV4cCI6MjEwODc1OTkxOX0.2BmopCqyQdkJhtCEvoqFzD2rqkMwvCbEUKXLh5TNDgU';

// 2. Inisialisasi Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 3. Fungsi untuk menguji koneksi ke database
async function cekKoneksiSupabase() {
    const statusText = document.getElementById('status');
    
    // PERHATIAN: Ganti 'nama_tabel_anda' dengan nama tabel yang sudah Anda buat di Supabase!
    const { data, error } = await supabase.from('catatan').select('*');

    if (error) {
        console.error("Gagal terhubung:", error.message);
        if (statusText) {
            statusText.textContent = "Gagal terhubung ke database: " + error.message;
            statusText.style.color = "red";
        }
    } else {
        console.log("Berhasil terhubung! Data:", data);
        if (statusText) {
            statusText.textContent = "✅ Berhasil terhubung ke database Supabase!";
            statusText.style.color = "green";
        }
    }
}
cekKoneksiSupabase();

// 4. Daftarkan PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('PWA Siap!'));
  });
}
