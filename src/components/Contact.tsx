import { contact } from "@/portfolio";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="mt-[5em] flex flex-col items-center" id="contact">
      <h2 className="text-center mb-[1em] uppercase font-bold">Contact</h2>

      <a href={`mailto:${contact.email}`}>
        <button className="text-base font-bold px-4 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-bg transition">
          email me
        </button>
      </a>
    </section>
  );
};

export default Contact;
