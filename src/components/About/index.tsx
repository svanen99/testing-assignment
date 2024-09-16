import { AboutMeType } from "@/utils/types";
import { section } from "framer-motion/client";

const AboutMe = ({ start, experience, nextStep, purpose}: AboutMeType) => {
    return (
        <section 
            data-testid="about-me-section"
        >
            <h2>About Me</h2>
            <h3>I´m Alexandra</h3>

            <p data-testid="start">
                {start}
            </p>
            <p data-testid="experience">
                {experience}
            </p>
            <p data-testid="next-step">
                {nextStep}
            </p>
            <p data-testid="purpose">
                {purpose}
            </p>
        </section>
    )
}

export default AboutMe;