import Image from "next/image";

const Header = () => {
    return (
        <>
        <div data-testid="header" className="flex flex-col">
            <h2 className="text-amber-800 opacity-55 p-4 text-3xl md:text-5xl text-right font-flowers mr-4 md:m-6">Welcome to my portfolio</h2>
            <div className="flex justify-between items-end">
                <h1 className="text-white font-SansNarrow ml-4 text-3xl md:ml-10 ">ALEXANDRA BLOMBERG</h1>
                <Image className="justify-right w-auto md:h-58" src="/images/floating-sunflowers.png" alt="Sunflowers in header" width={340} height={225} />
            </div>
        </div>
        </>
    )
}
export default Header; 