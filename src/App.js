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
const items = data.map((items)=> (
  <div key={ items.alt} >
  <img src={items.src} alt={items.alt} />
</div>
))

function App() {
  return (
    <div className="App">
       <SimpleCarousel slideItems={items} /> 
    </div>
  );
}

export default App;
