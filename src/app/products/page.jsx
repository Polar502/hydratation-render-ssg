import {
  WelcomeWithHasMounted,
  WelcomeWithOutHasMounted,
} from '../../components/Welcome'

export default function ProductsPage() {
  return (
    <>
      <main className="relative z-0 grid grid-flow-row-2 md:grid-cols-2 h-screen w-screen">
        <section className="bg-emerald-400 h-full row-span-1 md:col-span-1">
          <div className="flex h-full justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center bg-white shadow-xl rounded-xl h-[30vh] w-[40vw] mt-10 md:mt-0 ">
              <h1 className="text-black font-bold text-xl">
                Carga con useHasMounted
              </h1>
              <WelcomeWithHasMounted />
            </div>
          </div>
        </section>
        <section className="bg-rose-500 h-full row-span-1 md:col-span-1">
          <div className="flex h-full justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center bg-white shadow-xl rounded-xl h-[30vh] w-[40vw] mt-10 md:mt-0 ">
              <h1 className="text-black font-bold text-xl">
                Carga sin useHasMounted
              </h1>
              <WelcomeWithOutHasMounted />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
