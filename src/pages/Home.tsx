import Categories from "../components/Categories";

export default function Home() {
  return (
    <main className="min-h-screen bg-[url('/background/Girl.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center lg:justify-start px-6 sm:px-8 lg:px-0">
      <div className="w-full max-w-[450px] rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 shadow-2xl lg:ml-16">
        <h1 className=" text-4xl sm:text-5xl font-extrabol text-white">Quiz Master</h1>
        <p className=" mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-white/80">
          Select your challenge and prove your coding skills.
        </p>
        <div className="mt-8 sm:mt-10">
          <Categories />
        </div>
      </div>
    </main>
  );
}