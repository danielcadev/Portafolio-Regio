import Navbar from '../components/Navbar/Navbar';
import ContactForm from '../components/Contact/ContactForm';

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
