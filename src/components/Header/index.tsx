import Image from "next/image";

const Header = () => {
    return (
        <>
        <div data-testid="header">
            <h2 className="text-amber-800 opacity-55 p-4 text-3xl md:text-4xl text-right font-flowers mr-4 md:m-6">Welcome to my portfolio</h2>
            <div>
                <h1 className="text-white font-SansNarrow ml-4 text-3xl md:ml-10 ">ALEXANDRA BLOMBERG</h1>
            </div>
        </div>
        </>
    )
}
export default Header; 