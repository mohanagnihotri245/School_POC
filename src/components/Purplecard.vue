<template>
    <div class="container-fluid">
        <h1 class="text-center mt-5 display-3 fw-bold">Why <span class="theme-text">Choose Us</span></h1>
        <hr class="mx-auto mb-5 w-25">
        <div class="row mb-5">
            <div class="col-12 col-sm-6 col-md-3 m-auto">
    <!-- card starts here -->
    <div class="card shadow">
        <div class="card-body text-center">
            <h3>20+ Years <br> Experience</h3>
            <hr class="mx-auto w-75">
            <i class="fa-solid fa-award icon-large"></i>
            <img src="" alt="" class="card-img-top">
        </div>
    </div>
    <!-- card ends here -->
</div>

             <!-- col ends here -->
             <div class="col-12 col-sm-6 col-md-3 m-auto">
    <!-- card starts here -->
    <div class="card shadow">
        <div class="card-body text-center">
            <h3>555+ Students  <br>  Placed</h3>
            <hr class="mx-auto w-75">
            <i class="fa-solid fa-tasks icon-large"></i>
            <img src="" alt="" class="card-img-top">
        </div>
    </div>
    <!-- card ends here -->
</div>

            <!-- col ends here -->
            <div class="col-12 col-sm-6 col-md-3 m-auto">
    <!-- card starts here -->
    <div class="card shadow">
        <div class="card-body text-center">
            <h3>100+ times <br> Events</h3>
            <hr class="mx-auto w-75">
            <i class="fa-solid fa-calendar-days icon-large"></i>
            <img src="" alt="" class="card-img-top">
        </div>
    </div>
    <!-- card ends here -->
</div>

            <!-- col ends here -->
            <div class="col-12 col-sm-6 col-md-3 m-auto">
    <!-- card starts here -->
    <div class="card shadow">
        <div class="card-body text-center">
            <h3>Constant <br> Innovation</h3>
            <hr class="mx-auto w-75">
            <i class="fa-solid fa-lightbulb icon-large"></i>
            <img src="" alt="" class="card-img-top">
        </div>
    </div>
    <!-- card ends here -->
</div>

            <!-- col ends here -->
        </div>
    </div>


</template>
<script>
</script>
<style scoped>
/* google fonts link */

@import url("https://fonts.googleapis.com/css2?family=Nunito&display=swap");

.theme-text {
  color: #474af0;
}
h3{
    font-size: 30px;
    margin-bottom: 10px;
}
.card-img-top {
  /* height: 200px; */
  max-width: 100%;
  max-height: 200px;
}
.card body i{
    max-width: 100%;
    max-height: 200px;
}
.text-center {
    text-align: center;
}

.icon-large {
    font-size: 5rem; /* Adjust the size as needed */
    display: block;
    margin: 0 auto;
    margin-top: 10px;
}

.card {
  z-index: 1;
  overflow: hidden;
  transition: 0.5s;
}
.card:hover {
  color: white;
}
.card::before {
  content: "";
  position: absolute;
  left: -100%;
  top: 0%;
  background: #474af0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  z-index: -1;
}
.card:hover::before {
  left: 0%;
  color: white;
}
.container-fluid {
  background-image: url("blob-scene-haikei.svg");
  background-position: center;
  background-size: cover;
}
</style>