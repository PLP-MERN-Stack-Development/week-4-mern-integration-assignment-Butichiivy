// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Change text on button click
  const statusBtn = document.getElementById('change-text-btn');
  const statusText = document.getElementById('status-text');
  if (statusBtn) {
    statusBtn.addEventListener('click', () => {
      statusText.textContent = 'Records requested. Awaiting approval...';
    });
  }

  // Add and remove box
  const registerBtn = document.getElementById('Register-btn');
  const cancelBtn = document.getElementById('Cancel-btn');
  const box = document.getElementById('box');
  if (registerBtn && cancelBtn && box) {
    registerBtn.addEventListener('click', () => {
      box.innerHTML = '<p>New Patient Registered!</p>';
      box.style.background = '#e0f2f1';
      box.style.padding = '10px';
    });

    cancelBtn.addEventListener('click', () => {
      box.innerHTML = '';
    });
  }

  // Long press event
  const secretBtn = document.getElementById('secret-btn');
  let pressTimer;
  if (secretBtn) {
    secretBtn.addEventListener('mousedown', () => {
      pressTimer = setTimeout(() => {
        alert('🔒 Secret action triggered!');
      }, 1500);
    });
    secretBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));
  }

  // Real-time Form Validation
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const emailFeedback = document.getElementById('email-feedback');
      emailFeedback.textContent = emailInput.validity.valid ? '' : 'Invalid email format.';
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      const passwordFeedback = document.getElementById('password-feedback');
      passwordFeedback.textContent = passwordInput.value.length >= 8 ? '' : 'Password must be at least 8 characters.';
    });
  }

  // Theme switcher with localStorage
  const themeSelector = document.getElementById('theme-selector');
  if (themeSelector) {
    const savedTheme = localStorage.getItem('chronicare-theme');
    if (savedTheme) {
      document.body.className = savedTheme;
    }

    themeSelector.addEventListener('change', () => {
      document.body.className = themeSelector.value;
      localStorage.setItem('chronicare-theme', themeSelector.value);
    });
  }

  // Contact form (if on contact.html)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('contact-email').value;
      const message = document.getElementById('message').value;

      if (name && email && message) {
        alert('✅ Message sent successfully!');
        contactForm.reset();
      } else {
        alert('❌ Please fill in all fields.');
      }
    });
  }
});
