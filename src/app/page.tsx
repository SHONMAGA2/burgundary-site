import Link from 'next/link';
"use client";
import { useEffect } from 'react';

const services = [
  "Website/app template",
  "SEO",
  "Website/app Maintenance",
  "Backend & Frontend Development",
];

const products = [
  "Web-Application/websites",
  "Mobile Application",
  "Python",
  "Machine Learning-Models.",
];

export default function Home() {
  useEffect(() => {
    alert("Welcome to Burgundary");
  }, []);

  return (
    <main className="bg-[#F8F8F0] text-[#800020] min-h-screen p-6">
      <h1 className="flex justify-center ml-12 text-5xl font-bold">Burgundary</h1>
      <p className="flex justify-center ml-12 font-bold">
        <strong>Your trusted web designer since 2024</strong>
      </p>

      <section className="flex justify-center mt-8">
        <form action="/search" method="GET" className="flex justify-center gap-4 w-full max-w-xl">
          <label htmlFor="Bug">Bug Search</label>
          <input
            type="search"
            name="Bug"
            id="Bug"
            placeholder="Search for other sites"
            className="border border-gray-300 rounded p-2 flex-grow"
          />
          <button
            type="submit"
            className="bg-[#800020] text-white px-4 py-2 rounded hover:bg-[#5a0015]"
          >
            Submit
          </button>
        </form>
      </section>

      <div className="flex justify-evenly text-center gap-20 mt-20 p-8 shadow-md">
        <section className="services box-border rounded-lg shadow-md p-6 max-w-md">
          <h2 className="text-3xl mb-4">Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </section>

        <section className="products box-border rounded-lg shadow-md p-6 max-w-md">
          <h2 className="text-3xl mb-4">Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="cards mt-40 shadow-md max-w-xl ml-[15rem] bg-[#F8F8F0] rounded-lg p-4 text-center">
        <div className="E">
          <h2 className="text-3xl mb-4">E-commerce</h2>
          <p>An E-commerce where all our products are waiting to be bought by you</p>
          <Link href="/shop" className="text-[#800020] underline">
            E-Commerce
          </Link>
        </div>
      </div>
    </main>
  );
}
