const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const overlay = document.getElementById('overlay');
    
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    overlay.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Close menu when clicking on links
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });



   document.addEventListener('DOMContentLoaded', function() {
    const viewAllBtn = document.getElementById('view-all-btn');
    const characterCards = document.querySelectorAll('.character-card');
    let showingAll = false;
    
    // Initially show only first 3 characters
    characterCards.forEach((card, index) => {
      if (index > 3) {
        card.classList.add('hidden');
      }
    });
    
    viewAllBtn.addEventListener('click', function() {
      showingAll = !showingAll;
      
      if (showingAll) {
        // Show all characters
        characterCards.forEach(card => {
          card.classList.remove('hidden');
        });
        viewAllBtn.querySelector('span').textContent = 'Show Less';
      } else {
        // Show only first 3 characters
        characterCards.forEach((card, index) => {
          if (index > 3) {
            card.classList.add('hidden');
          }
        });
        viewAllBtn.querySelector('span').textContent = 'View All Characters';
      }
    });
  });