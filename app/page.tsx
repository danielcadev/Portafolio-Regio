import SmoothScroll from '../src/components/Layout/SmoothScroll';
import Hero from '../src/components/MainPage/Hero';
import Skills from '../src/components/MainPage/Grid';


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
        <main className="flex-grow">
          <Hero />
          <div className="container mx-auto py-16 px-4 space-y-16">
            <div className=" p-6 rounded-lg shadow-lg">
              <Skills />
            </div>
          
          </div>
        </main>
      </div>
    </SmoothScroll>
  );
}
