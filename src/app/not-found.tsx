import Footer from "@/components/Footer";
import { header } from "@/portfolio";

export default function NotFound() {
  const { homepage, title } = header;

  return (
    <main className="font-poppins leading-6 text-fg bg-bg shadow-lg p-8 min-h-dvh flex flex-col justify-between">
      <header className="flex items-center justify-between h-32 max-w-[1100px] w-[95%] mx-auto md:h-24">
        <h3>
          {homepage ? (
            <a
              href={homepage}
              className="text-primary hover:underline font-bold text-2xl"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
      </header>
      <div className="flex flex-col items-center mt-4 md:mt-12 gap-4">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
          Nothing here
        </h1>
      </div>
      <Footer />
    </main>
  );
}
