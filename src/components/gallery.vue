<template>
  <div class="wrapper">
    <h1 class="gallery-heading">Gallery</h1>
    <div class="gallery">
      <div v-for="(item, index) in galleryItems" :key="index" :class="['gallery__item', item.className]">
        <a :href="item.href" class="gallery__link">
          <img :src="item.src" :alt="item.alt" class="gallery__image" />
          <div class="gallery__overlay">
            <span>{{ item.title }}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryItems: [
        {
          className: 'gallery__item--1',
          src: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/v1/gallery/jozf7yxigrl1bxdmef0i',
          alt: 'School Science Fair',
          title: 'Science Fair 2024',
          href: '#'
        },
        {
          className: 'gallery__item--2',
          src: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/v1/gallery/eq3xsfc0xgnpdq4tfd9i',
          alt: 'Sports Day',
          title: 'Sports Day 2024',
          href: '#'
        },
        {
          className: 'gallery__item--3',
          src: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/v1/gallery/q8rff2kpem7qcibhhsma',
          alt: 'Graduation Ceremony',
          title: 'Graduation 2024',
          href: '#'
        },
        {
          className: 'gallery__item--4',
          src: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/v1/gallery/tbssoxuedeickscnresu',
          alt: 'Art Exhibition',
          title: 'Art Exhibition 2024',
          href: '#'
        },
        {
          className: 'gallery__item--5',
          src: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/v1/gallery/ux9svtnrbmycsihva3k0',
          alt: 'Music Concert',
          title: 'Music Concert 2024',
          href: '#'
        },
        {
          className: 'gallery__item--6',
          src: 'https://res.cloudinary.com/dqhy9zq3g/image/upload/f_auto,q_auto/v1/gallery/rrucpd69qicugbm9ehei',
          alt: 'Field Trip',
          title: 'Field Trip 2024',
          href: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
*,
*:before,
*:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background: #ecf0f1;
}

.wrapper {
    max-width: 75rem;
    padding: 2rem;
    margin: 0 auto;
}

.gallery-heading {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 2rem;
}

/* Gallery */
.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 12.5rem);
    gap: .5rem;
}

/* Gallery Layout */
.gallery__item--1 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
}

.gallery__item--2 {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
}

.gallery__item--3 {
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
}

.gallery__item--4 {
    grid-column: 3 / span 1;
    grid-row: 1 / span 3;
}

.gallery__item--5 {
    grid-column: 1 / span 2;
    grid-row: 3 / span 2;
}

.gallery__item--6 {
    grid-column: 3 / span 1;
    grid-row: 4 / span 1;
}

/* Gallery Link */
.gallery__link {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

/* Gallery Link Overlay */
.gallery__overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.4);
    font-size: 1.5rem;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;

    opacity: 0;
    pointer-events: none;
    transition: opacity .2s;
}

.gallery__link:hover .gallery__overlay {
    opacity: 1;
}

/* Gallery Overlay Text */
.gallery__overlay span {
    position: relative;
    line-height: 3rem;
}

.gallery__overlay span:before,
.gallery__overlay span:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    background: #fff;
    transition: width .3s ease-out .2s;
}

.gallery__overlay span:before {
    top: 0;
    left: 0;
}

.gallery__overlay span:after {
    bottom: 0;
    right: 0;
}

.gallery__link:hover .gallery__overlay span:before,
.gallery__link:hover .gallery__overlay span:after {
    width: 100%;    
}

/* Gallery Image */
.gallery__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
    transition: 
        transform .5s,
        filter .5s;
}

.gallery__link:hover .gallery__image {
    transform: scale(1.2);
    filter: blur(2px);
}

@media screen and (max-width: 60rem) {
    .wrapper {
        padding: 1rem;
    }

    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }

    /* Gallery Layout */
    .gallery__item--1 {
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
    }

    .gallery__item--2 {
        grid-column: 1 / span 1;
        grid-row: 2 / span 1;
    }

    .gallery__item--3 {
        grid-column: 2 / span 1;
        grid-row: 1 / span 2;
    }

    .gallery__item--4 {
        grid-column: 1 / span 1;
        grid-row: 3 / span 2;
    }

    .gallery__item--5 {
        grid-column: 2 / span 1;
        grid-row: 3 / span 1;
    }

    .gallery__item--6 {
        grid-column: 2 / span 1;
        grid-row: 4 / span 1;
    }

    .gallery__overlay {
        font-size: 1.25rem;
    }
}

@media screen and (max-width: 35rem) {
    .gallery {
        display: block;
    }

    .gallery__item {
        margin: .5rem;
    }

    .gallery__link {
        height: 80vw;
    }

    .gallery__overlay {
        font-size: 1rem;
    }
}
</style>
