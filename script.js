// Carousel
const slides = document.querySelectorAll('.carousel img');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

// Handle Form Submit with Confirmation
document.getElementById('messageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Ambil data form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Isi modal dengan data
  document.getElementById('confirmName').innerText = name;
  document.getElementById('confirmEmail').innerText = email;
  document.getElementById('confirmMessage').innerText = message;

  // Tampilkan modal
  document.getElementById('confirmModal').style.display = 'block';

  // Jika konfirmasi diklik
  document.getElementById('confirmSend').onclick = () => {
    document.getElementById('formResult').innerText = `Thanks, ${name}, your message has been sent!`;
    document.getElementById('messageForm').reset();
    document.getElementById('confirmModal').style.display = 'none';
  };

  // Jika batal diklik
  document.getElementById('cancelSend').onclick = () => {
    document.getElementById('confirmModal').style.display = 'none';
  };
});
