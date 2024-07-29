import Navbar from '../../../src/components/Layout/Navbar/Navbar';
import ContactForm from '@/src/components/Contact/ContactForm';
// import ContactForm from '../components/';

export default function Projects() {
  return (
   
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow ">
       <ContactForm />
      </div>
    </div>

  
    
  );
}
