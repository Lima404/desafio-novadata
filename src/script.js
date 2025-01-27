import Swiper from 'swiper'
import 'swiper/css';
// import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';
import 'swiper/css/pagination';

console.log(Swiper)

var swiper = new Swiper(".swiper", {
  loop: true,
  modules: [Navigation],
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 1,
  //     spaceBetween: 30
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 1,
  //     spaceBetween: 40
  //   }
  // }
  
});

document.querySelectorAll(".swiper-button-prev").forEach(item => {
  item.addEventListener("click", () => {
    swiper.slideNext();
  })
})

document.querySelectorAll(".swiper-button-next").forEach(item => {
  item.addEventListener("click", () => {
    swiper.slidePrev();
  })
})