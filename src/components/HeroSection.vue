<template>
  <!-- Hero Section -->
  <section id="hero" class="hero section dark-background">

    <!-- <img src="/img/hero-bg.jpg" class="hero-bg" alt="" data-aos="fade-in"> -->

    <div class="container text-center" data-aos="fade-up" data-aos-delay="100">
      <h2>Your Hub For</h2>
      <p><span class="typed" data-typed-items="Communities, Teaching, Podcasts, Coaching, Courses, Events, Memberships"></span></p>
      <p class="teaser-text">Unlock the potential of your community with self-sustaining paid memberships, online courses, challenges, and events.</p>
      <div>
        <a href="#about" class="cta-btn">Get Started</a>
      </div>
      <div class="text-center" data-aos="fade-up" data-aos-delay="100">
        <img class="hero-image" src="/img/hero-teaser-image.png" alt="">
      </div>
    </div>

  </section><!-- /Hero Section -->
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const setCursorFontSize = () => {
  const cursorElements = document.querySelectorAll('.typed-cursor');
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  cursorElements.forEach(cursor => {
    cursor.style.fontSize = isMobile ? '32px' : '64px'; // Setze die Schriftgröße hier
  });
};

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      setCursorFontSize(); // Setze die Schriftgröße, wenn der Cursor im DOM erscheint
    }
  });
});

onMounted(() => {
  // Starte den Observer, um auf Änderungen im DOM zu hören
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

onBeforeUnmount(() => {
  // Stoppe den Observer, wenn die Komponente unmontiert wird
  observer.disconnect();
});
</script>

<style scoped>
.hero-image {
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
}
.typed {
  font-size: 64px;
}
.typed-cursor {
  font-size: 50px; /* Cursor-Größe anpassen */
  line-height: 50px; /* Optional: Zeilenhöhe anpassen, um die vertikale Ausrichtung zu verbessern */
}

.typed.typed-cursor--blink {
  font-size: 50px; /* Cursor-Größe während des Blinkens anpassen */
}

.teaser-text {
  padding: 0 220px;
}

@media screen and (max-width: 768px) {
  .typed {
    font-size: 32px;
  }
  .typed-cursor {
    font-size: 20px; /* Cursor-Größe anpassen */
    line-height: 20px; /* Optional: Zeilenhöhe anpassen, um die vertikale Ausrichtung zu verbessern */
  }
  .typed.typed-cursor--blink {
    font-size: 20px; /* Cursor-Größe zurück des Blinkens anpassen */
  }
  .teaser-text {
    padding: 0 20px;
  }
}

</style>
