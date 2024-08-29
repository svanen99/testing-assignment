const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <div data-testid="footer" className="flex items-end justify-center h-44 p-4 bg-black text-gray-300 font-SansNarrow">
      <p className="">Alexandra Blomberg &copy; {currentDate} | See repo in 
        <a
          href="https://github.com/blombergalex/alex-bloom"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a></p>
    </div>
  )
}

export default Footer