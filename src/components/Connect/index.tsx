import { ConnectType } from "@/utils/types"
import Image from "next/image";

const Connect = ({ connectText, imgSrc, alt }: ConnectType) => {
    return (
        <section data-testid="connect-section" className="text-pink-400 p-2 md:p-4">
            <h2 className="text-center text-2xl mb-20 flex-col">
                Let's Connect
            </h2>
            <p data-testid="connect-text" className="p-6 leading-8 text-xl">{connectText}</p>
            <div className="p-6 text-xl hover:text-black">
                <a href="mailto:blombergalexandras@gmail.com">
                    <span>blombergalexandras@gmail.com</span>
                </a>
            </div>
            <div className="p-6 text-xl hover:text-black">
                <a href="https://www.linkedin.com/in/alexandra-blomberg-7231a616a/">
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    )
}

export default Connect;