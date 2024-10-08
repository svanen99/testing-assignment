const Footer = () => {
    return (
        <>
            <div data-testid="footer" className="w-full text-black bg-pink-200 p-12 flex flex-col">
                <h3 className="flex text-lg mb-5 md:text-xl">Say Hello</h3>
                <div className="flex flex-col space-y-4 text-sm md:text-lg">
                    <a href="mailto:blombergalexandras@gmail.com" className="flex items-center space-x-2 hover:text-pink-600">
                        <span>blombergalexandras@gmail.com</span>
                    </a>
                    <a href="https://linkedin.com/in/alexandra-blomberg-7231a616a" className="flex items-center space-x-2 hover:text-pink-600 pb-10">
                        <span>LinkedIn</span>
                    </a>
                </div>
                <p data-testid="bottom-text" className="border-t-2 border-pink-700 text-center pt-14">
                    Alexandra Blomberg &copy; | &nbsp;
                    <a href="https://github.com/blombergalex/alex-bloom">
                        Source code
                    </a>
                </p>
            </div>
        </>
    );
}

export default Footer;
