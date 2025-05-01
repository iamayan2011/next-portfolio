import Image from "next/image";
import { techIcons } from "@/data";

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  link: string;
  category: string;
  techstack?: string[];
};


export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10">
      {projects.map(({ id, title, des, img, link, techstack = [] }) => (
        <div
          key={id}
          className="w-96 h-[28rem] shadow-sm rounded-2xl overflow-hidden relative group"
        >
          
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="block h-full"
          >
            <div className="relative w-full h-full">
              {/* the full-height image */}
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
              />

              {/* gradient overlay animating height */}
              <div
                className="
                  absolute inset-x-0 top-0
                  h-0 opacity-0
                  bg-gradient-to-r from-[#04071D] to-[#543486]
                  transition-all duration-500 ease-in-out
                  group-hover:h-full group-hover:opacity-[0.85]
                  z-10
                "
              />

              {/* centered title + desc */}
              <div
                className="
                  absolute inset-0 flex items-center justify-center
                  text-center px-4
                  opacity-0 transition-opacity duration-500
                  group-hover:opacity-100
                  z-20
                "
              >
                <div className="text-white">
                  <h4 className="text-2xl font-bold mb-2">{title}</h4>
                  <p className="text-sm italic">{des}</p>
                </div>
              </div>
            </div>
          </a>

          {/* ────────────────────────────────── */}
          {/* TECH-STACK BAR (always on top) */}
          <div
            className="
              absolute bottom-0 left-0 w-full
              bg-[#131838] backdrop-blur-md
              p-4
              z-30
            "
          >
            <h2 className="mb-4 text-lg font-bold group-hover:hidden transition-all duration-1000 ease-in-out">{title}</h2>
            <div className="flex flex-wrap gap-3">
              {techstack.map((tech) => {
                const info = techIcons.find((t) => t.abv === tech);
                if (!info) return null;
                return (
                  <div key={info.abv} className="flex items-center gap-1 text-sm">
                    <Image
                      src={info.icon}
                      alt={info.name}
                      width={20}
                      height={20}
                    />
                    <span>{info.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
