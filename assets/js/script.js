// Qui puoi aggiungere JavaScript in futuro per:
// - Smooth scrolling quando si clicca sui link del menu
// - Animazioni
// - Validazione form di contatto (se ne aggiungi uno)
// - Altre interattività

document.addEventListener('DOMContentLoaded', () => {
  console.log('Sito caricato e pronto!');

  // Esempio: Smooth scroll (molto basico)
  const links = document.querySelectorAll('.site-nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
