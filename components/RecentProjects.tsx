import React from 'react'
import { projects, techIcons } from '@/data'
import { PinContainer } from './ui/3d-pin'
import Image from "next/image";
import Projects from './Projects';

const RecentProjects = () => {
  return (
    <div className='py-10'>
      <h1 className='heading'>
        Some of my {' '}
        <span className="text-purple">recent projects.</span>
      </h1>

      {/* <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({id, title, des, img, skillLists, link}) => (
          <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            <div className="proj-imgbx">
        <a href={link} rel="noreferrer" target="_blank">
        <img src={img} alt="" style={{height:"280px",objectFit: "cover"}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span id="category">Web</span><br></br>
          <span id="description">{des}</span>
          
        </div>
        </a>
      </div>
        
      
      
        
       
          </div>
        ))}
      </div> */}




       {/* <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {projects.map(({ id, title, des, img, techstack, link }) => (
              <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
                <div className="proj-imgbx relative">
                  <a href={link} rel="noreferrer" target="_blank">
                    <img src={img} alt={title} style={{ height: "280px", objectFit: "cover" }} className="w-full" />
                    <div className="proj-txtx absolute inset-0 flex flex-col justify-center items-center px-4 text-white">
                      <h4>{title}</h4>
                      <span id="category">Web</span><br />
                      <span id="description">{des}</span>
                    </div>
                  </a>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                    {techstack.map((tech: string) => {
                      const techInfo = techIcons.find(t => t.abv === tech);
                      return techInfo ? (
                        <div key={techInfo.abv} className="flex flex-col items-center text-white text-xs">
                          <Image src={techInfo.icon} alt={techInfo.name} width={24} height={24} />
                          <span>{techInfo.name}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <Projects
          projects={projects}
          ></Projects>
      
    </div>
  )
}

export default RecentProjects
