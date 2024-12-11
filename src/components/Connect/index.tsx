import { ConnectType } from "@/utils/types";
import { EnvelopeIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type ConnectSectionProps = {
  onScrollToSection: (section: "connect") => void;
};

const Connect = ({ connectText, imgSrc, alt, onScrollToSection }: ConnectType & ConnectSectionProps) => {
  return (
    <section data-testid="connect-section" className="text-black flex justify-center p-3 md:p-12">
      <div className="leading-6 text-sm md:text-lg p-6 m-3">
        <h2
          className="text-center sticky text-lg z-10 md:text-2xl mb-10 text-pink-400"
          onClick={() => onScrollToSection("connect")}
        >
          Let's Connect
        </h2>
        <p data-testid="connect-text" className="mt-4">
          {connectText}
        </p>

        <div className="flex flex-col space-y-6 mt-6">
          <div className="text-pink-400 hover:text-pink-600">
            <a
              href="mailto:blombergalexandras@gmail.com"
              className="flex items-center space-x-2"
            >
              <EnvelopeIcon className="w-6 h-6" />
              <span>blombergalexandras@gmail.com</span>
            </a>
          </div>
          <div className="text-pink-400 hover:text-pink-600">
            <a
              href="https://www.linkedin.com/in/alexandra-blomberg-7231a616a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <UserPlusIcon className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-8">
          <Image
            src={imgSrc}
            width={225}
            height={340}
            alt={alt}
            className="max-w-32 h-auto rounded-full m-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Connect;