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
  <!-- <p class="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor ultricies donec risus sodales. Tempus quis et.</p> -->
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
                        <br>
                        Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Vel a eius
                        excepturi molestias commodi aliquam error magnam
                        consectetur laboriosam numquam, minima eveniet nostrum
                        sequi saepe ipsam non ea, inventore tenetur! Corporis
                        commodi consequatur molestiae voluptatum!
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
                        <br>
                        Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Vel a eius
                        excepturi molestias commodi aliquam error magnam
                        consectetur laboriosam numquam, minima eveniet nostrum
                        sequi saepe ipsam non ea, inventore tenetur! Corporis
                        commodi consequatur molestiae voluptatum!
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
                        <br>
                        Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Vel a eius
                        excepturi molestias commodi aliquam error magnam
                        consectetur laboriosam numquam, minima eveniet nostrum
                        sequi saepe ipsam non ea, inventore tenetur! Corporis
                        commodi consequatur molestiae voluptatum!
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
      font-family: montserrat;
    }
    section {
      display: grid;
      place-items: center;
      height: 100vh;
    }
    .section-header {
      position: relative;
      padding-bottom: 10px;
      text-align: center;
      font-weight: 900;
      padding-bottom: 25px;
      color: #b6abab;
    }
    .section-header:after {
      content: "";
      height: 3px;
      width: 200px;
      position: absolute;
      bottom: 0;
      left: calc(50% - 100px);
      background: #fff;
    }
    .section-header span {
      display: block;
      font-size: 15px;
      font-weight: 300;
    }
    .testimonials {
      padding: 0 15px 50px;
      margin: 0 auto 80px auto;
    }
    .carousel-item {
      height: 70vh;
      background-color: transparent; /* Remove any background color */
    }
    .single-item {
      background: #fff;
      color: #111;
      padding: 15px;
      margin: 50px 15px;
    }
    .profile {
      margin-bottom: 30px;
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
    .socials i {
      margin-right: 25px;
    }
    .bio h4 {
      font-family: "Berkshire Swash", cursive;
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
      background-color: rgb(0, 0, 0);
      opacity: 1; /* Ensure controls are fully visible */
    }
    @media (max-width: 768px) {
    .carousel-item {
      height: auto; /* Adjust carousel item height for mobile */
    }
    .single-item {
      margin: 20px 10px; /* Reduce margin on mobile */
      padding: 10px; /* Adjust padding on mobile */
    }
    .content {
      font-size: 16px; /* Smaller font size for mobile */
    }
    .content p span {
      font-size: 36px; /* Adjust quote icon size */
    }
    .img-area img {
      height: 150px; /* Smaller image for mobile */
      width: 150px;
    }
  }
  </style>
  