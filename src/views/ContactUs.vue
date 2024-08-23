<template>
	
	<section class="contact section-padding .fade-in" id="contact">
    <div class="container mt-0 mb-0">
        <div class="row">
            <div class="col-md-12">
                <div class="section-header text-center pb-0">
                    <h1>Contact Us</h1>
                </div>
            </div>
        </div>
        <div class="row m-0">
            <div class="col-md-12 p-0 pt-4 pb-4">
                <!--form content-->
            </div>
        </div>
    </div>
</section>


<section class="contactus .fade-in">
    <div class="row">
        <div class="contact-col">
            <div>
                <i class="fa fa-home"></i>
                <span>
                    <h5>Hindu College Of Engineering </h5>
                    <p>Sonepat, Haryana, India</p>
                </span>
            </div>
            <div>
                <i class="fa fa-phone"></i>
                <span>
                    <h5> 0130-2212756, 9034090663</h5>
                    <p>Monday to Friday, 10am to 6pm</p>
                </span>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <span>
                    <h5>hce.snp@hcesonepat.org</h5>
                    <p>Email us your queries</p>
                </span>
            </div>
        </div>
        <div class="contact-col">
            <form action="">
                <input type="text" placeholder="Enter your name" required>
                <input type="email" placeholder="Enter your email" required>
                <input type="text" placeholder="Enter your Subject" required>
                <textarea rows="8" placeholder="Message" required></textarea>
                <button type="button" class="btn btn-outline-success">Submit</button>
            </form>
        </div>
    </div>
</section>
<section class="location .fade-in">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.214877540552!2d77.01485307551361!3d28.981002975476283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db005944115cf%3A0x256a324c99ea9143!2sHindu%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1724401598121!5m2!1sen!2sin"
        width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>

<!-- <div class="flex items-center justify-center h-20 bg-gray-300"></div> -->
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
      // Fade-in animation
      const fadeElements = document.querySelectorAll('.fade-in');

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      fadeElements.forEach(element => {
        observer.observe(element);
      });
    });

</script>
 <style>
.section-padding {
    padding: 50px 10px;
    padding-bottom: 10px;
}
h1{
   font-size: 40px;
}
.location {
    width: 80%;
    margin: auto;
    padding: 80px 0;
}

iframe {
    width: 100%;
}

.contactus {
    width: 80%;
    margin: auto;
}

.contact-col {
    flex-basis: 48%;
    margin-bottom: 30px;
}

.contact-col div {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}

.contact-col div i {
    font-size: 28px;
    color: green;
    margin: 10px;
    margin-right: 30px;
}

.contact-col div p {
    padding: 0;
}

.contact-col div h5 {
    font-size: 20px;
    margin-bottom: 5px;
    color: green;
    font-weight: 400;
}

.contact-col input,
.contact-col textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 17px;
    outline: none;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Media Queries for Mobile View */
@media (max-width: 768px) {
    .contactus {
        width: 90%;
    }

    .contact-col {
        flex-basis: 100%;
        margin-bottom: 20px;
    }

    .contact-col div i {
        margin-right: 20px;
    }

    .contact-col input,
    .contact-col textarea {
        padding: 12px;
        margin-bottom: 15px;
    }
}

@media (max-width: 576px) {
    .section-padding {
        padding: 30px 5px;
    }

    .location {
        padding: 50px 0;
    }

    .contact-col div i {
        font-size: 24px;
    }

    .contact-col div h5 {
        font-size: 18px;
    }
}

</style>
