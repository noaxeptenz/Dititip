// Mengambil elemen berdasarkan ID
const tombol = document.getElementById('tombolUbah');
const pesan = document.getElementById('pesan');

// Menambahkan event listener saat tombol diklik
tombol.addEventListener('click', () => {
    pesan.textContent = "Hebat! JavaScript berhasil dijalankan.";
    pesan.style.color = "green";
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker terdaftar!', reg))
      .catch(err => console.log('Gagal mendaftarkan Service Worker:', err));
  });
}
// Ganti teks di dalam tanda kutip ini dengan Project URL dan Anon Key milik Anda
const SUPABASE_URL = 'https://zskmocqollgwaeubsljb.supabase.co';
const SUPABASE_ANON_KEY = 'eeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpza21vY3FvbGxnd2FldWJzbGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxODM5MTksImV4cCI6MjEwODc1OTkxOX0.2BmopCqyQdkJhtCEvoqFzD2rqkMwvCbEUKXLh5TNDgU';

// Inisialisasi koneksi Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Cek apakah berhasil
console.log("Koneksi Supabase siap!");