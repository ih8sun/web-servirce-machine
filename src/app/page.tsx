import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl text-white">Proyecto Sensor Data</h1>
      <p className="relative text-white">Web Service Activo <span className="absolute h-3 w-3 rounded-full bg-green-500 top-[7px] right-[-20px]" />   </p>
    </main>

  );
}
