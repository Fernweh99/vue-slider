/*
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (questo richiederĂ  qualcosa che non abbiamo visto)
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce (questo richiederĂ  degli eventi che non abbiamo visto)
*/

const app = new Vue({
  el: "#carousel",
  data: {
    currentIndex: 0,
    play: "",
    pictures: [
      {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
      },
    
      {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'PerĂ¹',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
      },
    
      {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
      },
      {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
      },
      {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
      },
    ]
  },
  methods: {
    goToNext() {
      if (this.currentIndex >= this.pictures.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    goToPrev() {
      if (!this.currentIndex) {
        this.currentIndex = this.pictures.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    goToRespectiveImage(i) {
      this.currentIndex = i;
    },
    autoplay() {
      this.play = setInterval(this.goToNext,3000)
    },
    stopAutoplay(){
      clearInterval(this.play);
    }
  },
  mounted () {
    this.autoplay()
  }
})