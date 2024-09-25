import { AboutMeType } from "@/utils/types";

const AboutMe = ({ start, experience, nextStep, purpose}: AboutMeType) => {
    return (
        <section data-testid="about-me-section" className="text-pink-200 flex justify-center p-3 md:p-12">
            <div className="leading-6 text-sm md:text-lg p-6 m-3">
                    <h2 className="text-center sticky text-lg z-10 md:text-2xl mb-10">
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
                    <p data-testid="next-step" className="text-amber-600 mt-4">
                        {nextStep}
                    </p>
                    <p data-testid="purpose" className="mt-4">
                        {purpose}
                    </p>
            </div>
        </section>
    )
}

export default AboutMe;