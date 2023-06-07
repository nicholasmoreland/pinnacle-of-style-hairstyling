import Image from "next/image";
import { NavBar } from "./navbar/navbar";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Home Page
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
