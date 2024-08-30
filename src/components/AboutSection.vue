<script setup>
</script>

<template>
    <!-- About Section -->
    <section id="about" class="about section">

<!-- Section Title -->
<div class="container">

  <div class="row gy-4">

    <div class="col-lg-6 order-2 order-md-2" data-aos="fade-up" data-aos-delay="100">
      <img src="/img/about.jpg" class="img-fluid img-rounded mt-3" alt="">
    </div>

    <div class="col-lg-6 order-1 order-md-1 content" data-aos="fade-up" data-aos-delay="200">
      <h1>Instant Community Building: Your Idea, Live in Minutes</h1>
      <p class="teaser">
        Create a captivating community in record time. Icureset simplifies the process from start to finish.
      </p>
      <ul>
        <li><i class="bi bi-check-circle"></i> <span>Rapid Community Creation: Build a captivating community in record time with Icureset.</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Effortless Onboarding: Register easily and start building your community immediately.</span></li>
        <li><i class="bi bi-check-circle"></i> <span>Monetization Made Easy: Transform your passion into profit with Icureset's streamlined platform.</span></li>
      </ul>
    </div>


  </div>

</div>

</section><!-- /About Section -->
</template>

<style scoped>
  .img-rounded {
    border-radius: 10px; /* Set the border radius to 10px */
  }
  .content h1 {
    font-size: 56px;
    color: #141921;
  }
  .content {
    font-size: 20px;
    padding-right: 100px;
  }
  .container {
    padding: 90px 0;
  }
  .teaser {
    font-size: 24px;
    line-height: 33px;
  }

  @media (max-width: 768px) {
    .content {
      padding: 0 30px;
    }
    .content h1 {
      font-size: 54px;
      text-align: center;
      padding-bottom: 60px;
      position: relative;  
      font-weight: bold;
    }
    .container {
      padding: 10px 10px;
    }
  }
</style>