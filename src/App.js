import logo from './logo.svg';
import './App.css';
import SimpleCarousel from './Components/carousel';

const data  = [
  {
    src: "/carousel-1.jpg",
    alt: "slide 1"
  },
  {
      src: "/carousel-2.jpg",
      alt: "slide 2"
    },
    {
      src: "/carousel-3.jpg",
      alt: "slide 3"
    },
    {
      src: "/carousel-4.jpg",
      alt: "slide 4"
    },
    {
      src: "/carousel-5.jpg",
      alt: "slide 5"
    }
]

const sliderData  = [
  {
    src: "/banner1.jpg",
    alt: "slide 1"
  },
  {
      src: "/banner-2.jpg",
      alt: "slide 2"
    },

]

const items = data.map((items)=> (
  <div key={ items.alt} >
  <img src={items.src} alt={items.alt} />
</div>
))

const sliderItems = sliderData.map((items)=> (
  <div key={ items.alt} >
  <img src={items.src} alt={items.alt} />
</div>
))


function App() {
  return (
    <div className="App">
      <h1>All in one </h1>

      <h2>Carousel slider</h2>
       <SimpleCarousel slideItems={items} containerClass="container carousel-slider" /> 
       <br/>
       <h2>Simple slider</h2>
       <SimpleCarousel desktopItems={1} tabletItems={1} mobileItems={1} slideItems={sliderItems} containerClass="container slider" /> 
    </div>
  );
}

export default App;
