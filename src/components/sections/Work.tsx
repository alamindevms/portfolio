import { projects } from "../../data/projects";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectFeature } from "./ProjectFeature";

export default function Work() {
  return (
    <section id="work" aria-label="Selected work">
      <div className="wrap py-24 md:py-36">
        <SectionHeader
          index="01"
          label="Selected work"
          title={
            <>
              Work that <span className="text-outline">shipped</span>.
            </>
          }
          note="Production systems for real businesses — an enterprise platform and a multi-vendor marketplace, not demos."
        />
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <ProjectFeature key={project.id} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
