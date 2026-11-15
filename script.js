const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const mobileLayout = window.matchMedia('(max-width: 650px)');

const syncMobileSections = () => {
  document.querySelectorAll('.mobile-collapse').forEach((section) => {
    section.open = !mobileLayout.matches;
  });
};

syncMobileSections();
mobileLayout.addEventListener('change', syncMobileSections);

if (menuToggle && mainNav) {
  const setMenuOpen = (isOpen) => {
    mainNav.classList.toggle('mobile-open', isOpen);
    document.body.classList.toggle('mobile-menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) setMenuOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (
      menuToggle.getAttribute('aria-expanded') === 'true' &&
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });
}

// Form gönderimini kendi PHP/API/WordPress form sisteminize bağlayın.
document.querySelector('.quote-form')?.addEventListener('submit', function(e){
  if(this.getAttribute('action') === '#'){
    e.preventDefault();
    alert('Form gönderim sistemi henüz bağlanmadı. Bu formu hosting üzerindeki PHP, WordPress veya kullandığınız form servisine bağlayın.');
  }
});
