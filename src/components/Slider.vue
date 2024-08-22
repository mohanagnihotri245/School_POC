<template>
  <!-- Start of template--> 

  <!-- Carousel container with Bootstrap attributes -->
  <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
    
    <!-- Carousel indicators for navigation -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    
    <!-- Carousel items -->
    <div class="carousel-inner">
      
      <!-- Slide 1 -->
      <div class="carousel-item active c-item">
        <img src="https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/jcfofzlrua5bkdrp49oz" class="d-block w-100 c-img" alt="Slide 1">
        <div class="carousel-caption top-20 mt-4">
          <h1 class="display-1 fw-bolder text-capitalize"></h1>
        </div>
      </div>
      
      <!-- Slide 2 -->
      <div class="carousel-item c-item">
        <img src="https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/xhd5v8arzcsuuxiwlptj" class="d-block w-100 c-img" alt="Slide 2">
        <div class="carousel-caption top-12 mt-4">
          <p class="display-1 fw-bolder text-capitalize"></p>
        </div>
      </div>
      
      <!-- Slide 3 -->
      <div class="carousel-item c-item">
        <img src="https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/wvamxnkwwkssgrgwqose" class="d-block w-100 c-img" alt="Slide 3">
        <div class="carousel-caption top-12 mt-4">
          <p class="display-1 fw-bolder text-capitalize"></p>
        </div>
      </div>
      
      <!-- Slide 4 -->
      <div class="carousel-item c-item">
        <img src="https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/wgnxv2undtcigtrgjvm5" class="d-block w-100 c-img" alt="Slide 4">
        <div class="carousel-caption top-20 mt-4">
          <p class="display-1 fw-bolder text-capitalize"></p>
        </div>
      </div>
      
      <!-- Slide 5 -->
      <div class="carousel-item c-item">
        <img src="https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/gee9sm1raqw0yyditq7n" class="d-block w-100 c-img" alt="Slide 5">
        <div class="carousel-caption top-20 mt-4">
          <p class="display-1 fw-bolder text-capitalize"></p>
        </div>
      </div>
      
    </div>
    
    <!-- Previous button -->
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    
    <!-- Next button -->
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    
  </div>
  <!-- End of template-->
</template>

<script>
// Start of Script

// End of Script
</script>

<style>
/* Start of Script */

  /* Custom styles for carousel items */
  .c-item {
    height: 600px; /* Adjust the height as needed */
  }

  /* Ensure carousel images fit the container properly */
  .c-img {
    height: 100%;
    width: 100%;
    object-fit: cover; /* Ensures the image covers the entire area without distortion */
    filter: brightness(0.6); /* Optional: Darkens the image for better text visibility */
  }

/*  End of Script */
</style>
