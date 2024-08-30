<template>
    <!-- Services Section -->
    <section id="services" class="services section light-background">

<!-- Section Title -->
<div class="container service-title" data-aos="fade-up">
  <h2>Build a Thriving Community Through Human Connection</h2>
</div><!-- End Section Title -->

<div class="container">

  <div class="row">
    <img class="service-image" src="/img/img-service.png" alt="">
  </div>
  <div class="row gy-4">
    <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
      <div class="fat-line">
        <h4 class="title mt-3"><a href="service-details.html" class="stretched-link">Community Amplified</a></h4>
        <p class="description">Expand your reach, connect deeply. Build a thriving community where members engage, grow, and thrive together. Effortlessly manage your community, stay informed, and foster lasting connection</p>
      </div>
    </div>
    <!-- End Service Item -->

    <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
      <div class="fat-line">
        <h4 class="title mt-3"><a href="service-details.html" class="stretched-link">Your Community, Elevated</a></h4>
        <p class="description">Elevate your community to new heights. Connect seamlessly with your audience, track growth, and build a loyal following. Our platform empowers you to create an exceptional community experience.</p>
      </div>
    </div><!-- End Service Item -->

    <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
      <div class="fat-line">
        <h4 class="title mt-3"><a href="service-details.html" class="stretched-link">Community Growth Engine</a></h4>
        <p class="description">Accelerate your community's growth. Easily manage members, foster engagement, and stay ahead of the curve. Our platform provides the tools to build a thriving community.</p>
      </div>
    </div><!-- End Service Item -->
  </div>
</div>

</section><!-- /Services Section -->
</template>

<script setup>

</script>

<style scoped>
.fat-line {
  border-top: 3px solid var(--accent-color);  
}

.service-title h2 {
  font-size: 54px;
  text-align: center;
  padding-bottom: 60px;
  position: relative;  
  font-weight: bold;
}

.service-image {
  width: 100%;
  max-width: 800px;
  margin-bottom: 50px;
  margin-top: -40px;
  margin-left: auto; /* Add this */
  margin-right: auto; /* Add this */
}
.description {
  font-size: 20px;
}
</style>