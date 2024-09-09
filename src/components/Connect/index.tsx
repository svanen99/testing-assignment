import { ConnectType } from "@/utils/types";
import { EnvelopeIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Connect = ({ connectText, imgSrc, alt }: ConnectType) => {
  return (
    <section
      data-testid="connect-section"
      className="flex justify-center p-6 md:p-14"
    >
      <div className="text-gray-200 text-sm bg-black sticky top:0 z-10 space-y-5 md:text-lg">
        <h2 className="text-gray-200 bg-black text-center py-6 font-SansNarrow font-semi-bold text-lg sticky top-0 z-10 md:text-2xl md:py-12">
          Let's Connect
        </h2>
        <p data-testid="connect-text" className="opacity-85">
          {connectText}
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col space-y-4">
            <div  className="text-gray-200 hover:text-amber-500">
              <a
                href="mailto:blombergalexandras@gmail.com"
                className="flex items-center space-x-2"
              >
                <EnvelopeIcon className="w-6 h-6" />
                <span>blombergalexandras@gmail.com</span>
              </a>
            </div>
            <div className="text-gray-200 hover:text-amber-500">
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
          <Image
            src={imgSrc}
            width={220}
            height={325}
            alt={alt}
            className="h-28 w-auto md:h-56"
          />
        </div>
      </div>
    </section>
  );
};

export default Connect;
