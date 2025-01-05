import { header } from "@/portfolio";
import Navbar from "./Navbar";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header 
    className="flex items-center justify-between h-32 max-w-[1100px] w-[95%] mx-auto md:h-24">
      <h3>
        {homepage ? (
          <a href={homepage} className="text-primary hover:underline font-bold text-2xl">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
