<template>
  <Header />
    <main>
      <router-view /> <!-- Hier wird der Inhalt der Kindrouten gerendert -->
    </main>
  <Footer />
  
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue';
</script>