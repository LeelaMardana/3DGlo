//1 just default swiper
// import Swiper from 'swiper'; // js without navigation, pagination
// import 'swiper/css'; // css without navigation, pagination

//2 swiper with navigation, pagination
// import Swiper, { Navigation, Pagination } from 'swiper'; // js navigation, pagination
// import 'swiper/css';
// import 'swiper/css/navigation'; //css navigation
// import 'swiper/css/pagination'; //css pagination

//3 full swiper (Recommended. Cause support much more effects)
import Swiper from 'swiper/bundle'; // full js swiper styles
import 'swiper/css/bundle'; //full css swiper styles

const swiper = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    // navigation: {
    //   nextEl: '.swiper-btn-next',
    //   prevEl: '.swiper-btn-prev',
    // },
    effect: 'flip',
    flipEffect: {
      slideShadows: false,
    },
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // breakpoints: {
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    //   1024: {
    //     slidesPerView: 5,
    //     spaceBetween: 50,
    //   },
    // },
  });

  console.log(567);
};

export { swiper };

// const swiper = new Swiper('.swiper', {
//   loop: true,
//   slidesPerView: 3,
//   speed: 3000,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
// });
