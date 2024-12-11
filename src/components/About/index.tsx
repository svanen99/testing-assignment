export type AboutMeType = {
    start: string;
    experience: string;
    nextStep: string;
    purpose: string;
    onScrollToSection: (section: "connect" | "projects" | "aboutMe") => void;
  };
  
  const About: React.FC<AboutMeType> = ({ start, experience, nextStep, purpose, onScrollToSection }) => {
    return (
      <section data-testid="about-me-section" className="text-black flex justify-center p-3 md:p-12">
        <div className="leading-6 text-sm md:text-lg p-6 m-3">
          <h2 className="text-center sticky text-lg z-10 md:text-2xl mb-10 text-pink-400">
            About Me
          </h2>
          <h3 className="text-left text-xl md:text-2xl space-y-5 pb-4">
            I'm Alexandra,
          </h3>
          <p data-testid="start" className="mt-4">
            {start}
          </p>
          <p data-testid="experience" className="mt-4">
            {experience}
          </p>
          <p data-testid="next-step" className="text-pink-400 mt-4">
            {nextStep}
          </p>
          <p data-testid="purpose" className="mt-4">
            {purpose}
          </p>
          <button 
            className="mt-6 px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-500 transition"
            onClick={() => onScrollToSection("connect")}
          >
            Go to Connect
          </button>
        </div>
      </section>
    );
  };
  
  export default About;