import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavBar";

//import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";





export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <FloatingNav 
        navItems = {navItems}
        />
        <Hero />
        <Experience />

        {/* <TimelineDemo ></TimelineDemo> */}
       {/* <Grid /> */}
       <RecentProjects />

         
      </div>
    </main>
  );  
}
