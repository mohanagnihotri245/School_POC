<template>
	
	<section class="contact section-padding .fade-in" id="contact">
    <div class="container mt-0 mb-0">
        <div class="row">
            <div class="col-md-12">
                <div class="section-header text-center pb-0">
                    <h7>Contact Us</h7>
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
                    <h5>Evergreen Public School</h5>
                    <p>Delhi, India</p>
                </span>
            </div>
            <div>
                <i class="fa fa-phone"></i>
                <span>
                    <h5>00-000000</h5>
                    <p>Monday to Friday, 10am to 6pm</p>
                </span>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <span>
                    <h5>evergreenpubl@gmail.com</h5>
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d18186.17136255342!2d77.30636159928063!3d28.603648681839246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cfc9ac04d9895%3A0xe310947799391d99!2sVasundhara%20Enclave%2C%20Shaheed%20Captain%20Sameer%20Bhan%20Marg%2C%20Near%20Dharamshila%20Cancer%20Hospital%2C%20Vasundhara%20Enclave%2C%20New%20Delhi%2C%20Delhi%2C%20110096!3m2!1d28.601247299999997!2d77.3156944!5e0!3m2!1sen!2sin!4v1723453099239!5m2!1sen!2sin"
        width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>

<div class="flex items-center justify-center h-20 bg-gray-300"></div>
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
