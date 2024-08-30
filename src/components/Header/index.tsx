const Header = () => {
  return (
    <>
    <div data-testid="header" className="flex flex-col justify-between bg-hero-image bg-cover bg-left p-2 h-44 sm:pt-5 sm:h-72">
      <h2 className="text-right font-flowers text-2xl tracking-wider opacity-40 text-gray-300 sm:text-4xl md:text-6xl">
      Welcome to my project garden
      </h2>
      <h1 className="text-sm text-white uppercase opacity-60 font-SansNarrow sm:text-2xl">ALEXANDRA BLOMBERG</h1>
    </div>
    </>
  );
};

export default Header;