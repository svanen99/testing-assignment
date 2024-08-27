import sunflower from "../../../public/sunflower.jpg";

const Header = () => {
  return (
    <div className="flex flex-col bg-hero-image bg-cover bg-center text-center p-2 pt-20 sm:p-5 sm:h-72">
      <h2 className="font-flowers text-4xl tracking-wider align-text-bottom text-right opacity-50 text-gray-300 sm:text-7xl">
        Let's bloom together
      </h2>
    </div>
  );
};

export default Header;
