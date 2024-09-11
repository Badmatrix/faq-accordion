import Accordion from "./Accordion";

export default function Container() {
  return (
    <div className="absolute left-0 right-0 top-16 md:top-12 mx-5 sm:mx-8 space-y-3 rounded-lg bg-white px-3 py-5 md:mx-auto md:w-1/2 xl:w-1/3">
      <div className="flex items-center gap-4 py-2">
        <img src="/public/images/icon-star.svg" alt="" />
        <h1 className="text-xl font-bold text-purple-950 md:text-3xl lg:text-5xl">
          FAQs
        </h1>
      </div>
      <Accordion />
    </div>
  );
}
