import StyleQuizButton from "@/app/components/ui/StyleQuizButton";
import ProjectGalleryButton from "@/app/components/ui/ProjectGalleryButton";

export default function HeroSection() {
  return (
    <>
      <div
        className="
          text-center 
          px-[24px] py-[32px] sm:py-[48px] lg:py-[64px]"
      >
        <h1 className="heading-style">Find the Style That Speaks to You</h1>
        <p
          className="
    text-style mt-6 mx-auto 
    text-xs md:text-sm lg:text-xl 
    font-['Poppins']
    leading-normal
    md:leading-[16px]
    lg:leading-6
  "
        >
          Explore our curated design styles — balanced with real-home
          inspiration, guided
          <br />
          descriptions and expert insights to help you select with confidence.
        </p>

        <div
          className="
    flex mt-6
    flex-col items-center gap-4    
    sm:flex-row sm:justify-center   
  "
        >
          <StyleQuizButton />
          <ProjectGalleryButton />
        </div>
      </div>
    </>
  );
}
