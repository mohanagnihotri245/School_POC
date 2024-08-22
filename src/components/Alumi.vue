<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"
    rel="stylesheet"
  />

  <section>
    <div class="testimonials">
      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none text-center mx-auto">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Alumni</h2>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="single-item">
              <div class="row">
                <div class="col-md-5">
                  <div class="profile">
                    <div class="img-area">
                      <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt="Profile Picture"
                      />
                    </div>
                    <div class="bio">
                      <h2>Dave Wood</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="content">
                    <p>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel a eius excepturi molestias commodi aliquam error
                      magnam consectetur laboriosam numquam, minima eveniet
                      nostrum sequi saepe ipsam non ea, inventore tenetur!
                      Corporis commodi consequatur molestiae voluptatum!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="single-item">
              <div class="row">
                <div class="col-md-5">
                  <div class="profile">
                    <div class="img-area">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt="Profile Picture"
                      />
                    </div>
                    <div class="bio">
                      <h2>Martin Guptill</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="content">
                    <p>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel a eius excepturi molestias commodi aliquam error
                      magnam consectetur laboriosam numquam, minima eveniet
                      nostrum sequi saepe ipsam non ea, inventore tenetur!
                      Corporis commodi consequatur molestiae voluptatum!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="single-item">
              <div class="row">
                <div class="col-md-5">
                  <div class="profile">
                    <div class="img-area">
                      <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt="Profile Picture"
                      />
                    </div>
                    <div class="bio">
                      <h2>Stephen Jones</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="content">
                    <p>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel a eius excepturi molestias commodi aliquam error
                      magnam consectetur laboriosam numquam, minima eveniet
                      nostrum sequi saepe ipsam non ea, inventore tenetur!
                      Corporis commodi consequatur molestiae voluptatum!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
  body {
    font-family: Montserrat;
  }
  section {
    display: grid;
    place-items: center;
    height: 50vh;
    margin-top: 10px;
  }
  .testimonials {
    padding: 0 15px 30px; /* Reduced padding-bottom */
    margin: 0 auto 50px auto; /* Reduced margin-bottom */
  }
  .carousel-item {
    height: 70vh;
    background-color: transparent;
  }
  .single-item {
    background: #fff;
    color: #111;
    padding: 10px; /* Reduced padding */
    margin: 30px 15px; /* Reduced margin */
  }
  .profile {
    margin-bottom: 20px; /* Reduced margin-bottom */
    text-align: center;
  }
  .img-area {
    margin: 0 15px 15px 200px;
  }
  .img-area img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 7px solid rgb(56, 218, 247);
  }
  .content {
    font-size: 18px;
  }
  .content p {
    text-align: justify;
  }
  .content p span {
    font-size: 48px;
    margin-right: 20px;
    color: blueviolet;
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-color: rgb(0, 0, 0);
    opacity: 1;
  }
  @media (max-width: 768px) {
    .carousel-item {
      height: auto;
    }
    .testimonials{
       padding: 0 15px 30px; /* Reduced padding-bottom */
    margin: 0 auto 50px auto; /* Reduced margin-bottom */
    }
    .single-item {
      margin: 20px 10px;
      padding: 10px;
    }
    .content {
      font-size: 16px;
    }
    .content p span {
      font-size: 36px;
    }
    .img-area {
      margin: 0 50px 15px 80px;
      text-align: center;
    }
    .img-area img {
      height: 150px;
      width: 150px;
    }
    .profile {
      text-align: center;
      margin-bottom: 20px;
    }
  }
</style>
