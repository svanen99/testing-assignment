import Image from "next/image";

const Header = () => {
    return (
        <>
        <div data-testid="header" className="flex flex-col">
            <h2 className="text-pink-600 opacity-55 p-4 text-3xl md:text-5xl text-right font-flowers mr-4 md:m-6">Welcome to my portfolio</h2>
            <div className="flex justify-between items-end">
                <h1 className="text-pink-500 font-SansNarrow ml-4 text-3xl md:ml-10 pb-10 ">ALEXANDRA BLOMBERG</h1>
                <Image className="h-28 w-auto md:h-56" src="/images/floating-sunflowers.png" alt="Sunflowers in header" width={330} height={225} />
            </div>
        </div>
        </>
    )
}
export default Header; 