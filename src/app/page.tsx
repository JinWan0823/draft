export default function Home() {
  return (
    <section className="w-[1240px] mx-auto py-[120px]">
      <h2 className="text-center font-bold text-4xl">Today Draft</h2>

      <div className="flex flex-col items-center justify-center mt-[40px] w-full">
        <input type="text" className="border-2 mb-6 w-full max-w-[400px]" />

        <ul className="grid grid-cols-3 gap-6 w-full">
          <li className="h-40 bg-gray-200 rounded-md"></li>
          <li className="h-40 bg-gray-200 rounded-md"></li>
          <li className="h-40 bg-gray-200 rounded-md"></li>
          <li className="h-40 bg-gray-200 rounded-md"></li>
          <li className="h-40 bg-gray-200 rounded-md"></li>
          <li className="h-40 bg-gray-200 rounded-md"></li>
        </ul>
      </div>
    </section>
  );
}
