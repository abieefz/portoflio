// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;  // Menyimpan jarak dari atas halaman

    // Periksa apakah posisi scroll lebih dari posisi header
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');  // Menggunakan id untuk memilih elemen

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');  // Menyembunyikan atau menampilkan navMenu
});

 // Smooth Scrolling Effect
 document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default behavior

      const targetId = this.getAttribute('href'); // Get the target ID
      const targetElement = document.querySelector(targetId); // Find the target element

      if (targetElement) {
        // Smooth scrolling animation
        targetElement.scrollIntoView({
          behavior: 'smooth', // Smooth scrolling effect
          block: 'start', // Scroll to the top of the target element
        });
      }
    });
  });

// Fungsi untuk menangani pengiriman form dan menampilkan pesan sukses atau gagal
// Fungsi untuk menangani pengiriman form dan menampilkan pesan sukses atau gagal
function handleFormSubmit(event) {
    event.preventDefault(); // Mencegah pengiriman form default agar kita bisa menangani pengiriman
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Validasi form untuk memastikan semua kolom terisi
    if (!formData.name || !formData.email || !formData.message) {
        alert('Semua kolom harus diisi!');
        return false;
    }

    // Kirim data ke Formspree (akan mengirim email)
    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target)
    })
    .then(response => {
        if (response.ok) {
            // Setelah berhasil mengirim, kosongkan form
            document.getElementById('contact-form').reset();  // Reset form untuk mengosongkan semua isian
            alert('Pesan Berhasil Dikirim!');
        } else {
            throw new Error('Gagal mengirim pesan');
        }
    })
    .catch(error => {
        alert('Terjadi kesalahan, coba lagi nanti.');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Membuat observer baru
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Jika elemen masuk ke dalam viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Menambahkan kelas 'show' untuk animasi
                observer.unobserve(entry.target); // Hentikan pengamatan setelah elemen terlihat
            }
        });
    }, {
        threshold: 0.5 // Ketika setidaknya 50% elemen terlihat
    });

    // Mengamati semua elemen dengan kelas 'slide-up-animation'
    const elements = document.querySelectorAll('.slide-up-animation');
    elements.forEach(element => {
        observer.observe(element); // Mengamati elemen
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.slide-up-animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.3 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#contact-form');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.3 });

    observer.observe(form);
});

document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector('footer');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add('show');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(footer);
});


// Klik diluar hamburger
window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});


// dark mode
// Mendapatkan elemen toggle dan body
const toggle = document.getElementById('dark-toggle');
const body = document.body;

// Memeriksa apakah dark mode sudah diaktifkan sebelumnya
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark');
    toggle.checked = true;
} else {
    body.classList.remove('dark');
    toggle.checked = false;
}

// Menambahkan event listener untuk toggle dark mode
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.add('dark');
        localStorage.setItem('dark-mode', 'enabled'); // Simpan preferensi dark mode
    } else {
        body.classList.remove('dark');
        localStorage.setItem('dark-mode', 'disabled'); // Simpan preferensi light mode
    }
});

// Mengecek apakah dark mode sudah diaktifkan sebelumnya di localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkToggle.checked = true;
} else {
    body.classList.remove('dark-mode');
}

// Menambahkan event listener untuk mengubah mode saat toggle diklik
darkToggle.addEventListener('change', () => {
    if (darkToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }
});


// Menambahkan event listener ke tombol hamburger
hamburger.addEventListener('click', () => {
    // Toggle visibilitas menu navbar
    navMenu.classList.toggle('hidden');
});

// Mengecek apakah dark mode sudah diaktifkan sebelumnya di localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    darkToggle.checked = true;
} else {
    body.classList.remove('dark-mode');
}

// Menambahkan event listener untuk mengubah mode saat toggle diklik
darkToggle.addEventListener('change', () => {
    if (darkToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }
});
