import SmoothScroll from './components/SmoothScroll';
import Navbar from './MainPage/navbar';
import Footer from './MainPage/footer';
import Hero from './MainPage/hero';
import Skills from './MainPage/grid';


export default function MainPage() {
  return (
    <SmoothScroll options={{
      smoothWheel: true,
      lerp: 0.1,
      orientation: 'vertical',
      duration: 1.2,
      infinite: false,
      autoResize: true,
    }}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <div className="container mx-auto py-16 px-4 space-y-16">
            <div className=" p-6 rounded-lg shadow-lg">
              <Skills />
            </div>
          
          </div>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
