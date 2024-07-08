import ProjectCard from './ProjectCard';
import Navbar from '../components/Navbar/Navbar';


export default function Projects() {
  return (
   
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow ">
        <ProjectCard />
      </div>
    </div>

   
  );
}
