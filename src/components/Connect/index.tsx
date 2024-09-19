import { ConnectType } from "@/utils/types"
import Image from "next/image";

const Connect = ({ connectText, imgSrc, alt }: ConnectType) => {
    return (
        <section data-testid="connect-section">
            <h2>
                Let's Connect
            </h2>
            <p data-testid="connect-text">{connectText}</p>
            <a href="mailto:blombergalexandras@gmail.com">
                <span>blombergalexandras@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/alexandra-blomberg-7231a616a/">
                <span>LinkedIn</span>
            </a>
        </section>
    )
}

export default Connect;