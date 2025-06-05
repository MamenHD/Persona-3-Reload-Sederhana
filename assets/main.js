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

  document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');
  const muteToggle = document.getElementById('mute-toggle');
  const musicSelector = document.getElementById('music-selector');
  const currentTrack = document.getElementById('current-track');
  
  // Initialize player state
  let isPlaying = false;
  
  // Play/Pause Toggle
  musicToggle.addEventListener('click', function() {
    togglePlayback();
  });
  
  // Mute Toggle
  muteToggle.addEventListener('click', function() {
    audio.muted = !audio.muted;
    updateMuteIcon();
  });
  
  // Music Selection - auto plays when changed
  musicSelector.addEventListener('change', function() {
    if (this.value) {
      audio.src = this.value;
      currentTrack.textContent = this.options[this.selectedIndex].text;
      // Auto-play the new track
      if (!isPlaying) {
        togglePlayback();
      } else {
        audio.play().catch(error => {
          console.error("Playback failed:", error);
        });
      }
    } else {
      // If "Select a track" is chosen
      audio.pause();
      audio.src = '';
      currentTrack.textContent = 'No track selected';
      musicToggle.innerHTML = '<i class="fas fa-play"></i>';
      isPlaying = false;
    }
  });
  
  // Update UI based on audio state
  audio.addEventListener('play', function() {
    musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    isPlaying = true;
    // Show now playing after a short delay
    setTimeout(() => {
      document.querySelector('.now-playing').style.display = 'block';
    }, 1000);
  });
  
  audio.addEventListener('pause', function() {
    musicToggle.innerHTML = '<i class="fas fa-play"></i>';
    isPlaying = false;
  });
  
  function togglePlayback() {
    if (audio.src) {
      if (audio.paused) {
        audio.play().catch(error => {
          console.error("Playback failed:", error);
        });
      } else {
        audio.pause();
      }
    } else if (musicSelector.options.length > 1) {
      // If nothing playing but tracks available, play first track
      musicSelector.selectedIndex = 1;
      musicSelector.dispatchEvent(new Event('change'));
    }
  }
  
  function updateMuteIcon() {
    muteToggle.innerHTML = audio.muted 
      ? '<i class="fas fa-volume-mute"></i>' 
      : '<i class="fas fa-volume-up"></i>';
  }
  
  // Initialize mute icon
  updateMuteIcon();
});

const audio = document.querySelector('audio');
console.log(audio); // Periksa di console apakah element-nya terdeteksi