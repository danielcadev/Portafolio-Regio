import ProjectCard from '../../../src/components/Proyects/ProjectCard';
import Navbar from '../../../src/components/Layout/Navbar/Navbar';


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
