import { AboutMeType } from "@/utils/types";

const AboutMe = ({ start, experience, nextStep, purpose }: AboutMeType) => {
  return (
    <section
      data-testid="about-me-section"
      className="flex justify-center p-6 md:p-14"
    >
      <div className="text-gray-200 text-sm bg-black sticky top:0 z-10 space-y-5 max-w-4xl md:text-lg">
        <h2 className="text-gray-200 bg-black text-center py-6 font-SansNarrow font-semi-bold text-lg md:text-2xl sticky top-0 z-10">
          About Me
        </h2>
          <h3 className="text-xl font-SansNarrow mb-16 md:text-2xl">
            I'm Alexandra
          </h3>
        <p data-testid="start" className="opacity-85">{start}</p>
        <p data-testid="experience" className="opacity-85">{experience}</p>
        <p data-testid="next-step" className="text-amber-500">{nextStep}</p>
        <p data-testid="purpose" className="opacity-85">{purpose}</p>
      </div>
    </section>
  );
};

export default AboutMe;
