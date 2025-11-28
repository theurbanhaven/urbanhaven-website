import StyleQuizButton from "@/app/components/ui/StyleQuizButton";
import ProjectGalleryButton from "@/app/components/ui/ProjectGalleryButton";

export default function HeroSection() {
  return (
    <>
      <div className="text-center px-4 py-20">
        <h1 className="heading-style">Find the Style That Speaks to You</h1>

        <p className="text-style mt-6 mx-auto">
          Explore our curated design styles — balanced with real-home
          inspiration, guided
          <br />
          descriptions and expert insights to help you select with confidence.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <StyleQuizButton />
          <ProjectGalleryButton />
        </div>
      </div>
    </>
  );
}
