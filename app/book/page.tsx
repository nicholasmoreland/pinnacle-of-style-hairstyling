"use client";

import Image from "next/image";
import { useState } from "react";
import { NavBar } from "../navbar/navbar";
import { CheckIcon } from "@heroicons/react/20/solid";

const services = [
  {
    id: 0,
    serviceName: "Women's Basic Cut",
    serviceDescription: "",
    features: ["Wash", "Haircut"],
    price: "35",
    time: "45",
  },
  {
    id: 1,
    serviceName: "Women's Specialty Cut",
    serviceDescription: "",
    features: ["Wash", "Haircut", "Choice of Style"],
    price: "40+",
    time: "60",
  },
  {
    id: 2,
    serviceName: "Men's Basic Cut",
    serviceDescription: "",
    features: ["Basic Fade", "Complimentary Neck Shave"],
    price: "30",
    time: "45",
  },
  {
    id: 3,
    serviceName: "Men's Specialty Cut",
    serviceDescription: "",
    features: [
      "Textured/Regular Sheer Work",
      "Complimentary Neck Shave",
      "Mullets",
      "Mowhawks",
    ],
    price: "35+",
    time: "60",
  },
  {
    id: 4,
    serviceName: "Beard Trim w/ Edge Up",
    serviceDescription: "",
    features: ["Beard Trim", "Razor Edge Up"],
    price: "15",
    time: "15",
  },
  {
    id: 5,
    serviceName: "Girl's Basic Cut (12 & Under)",
    serviceDescription: "",
    features: ["Wash", "Haircut", "Optional Style"],
    price: "30",
    time: "35",
  },
  {
    id: 6,
    serviceName: "Boy's Basic Cut (12 & Under)",
    serviceDescription: "",
    features: ["Scissor Cut", "Complimentary Neck Shave"],
    price: "25",
    time: "30",
  },
  {
    id: 7,
    serviceName: "Boy's Specialty Cut (12 & Under)",
    serviceDescription: "",
    features: ["Textured/Regular Sheer Work", "Complimentary Neck Shave"],
    price: "30",
    time: "40",
  },
  {
    id: 8,
    serviceName: "Eyebrow Shaping",
    serviceDescription: "",
    features: ["Tweeze", "Trim", "Razor Edge Up"],
    price: "10",
    time: "10",
  },
  {
    id: 9,
    serviceName: "Hot Towel Shave (Beard)",
    serviceDescription: "",
    features: ["Hot Towel", "Straight Razor", "Shave Cream", "Mini Facial"],
    price: "30",
    time: "30",
  },
  {
    id: 10,
    serviceName: "Hot Towel Shave (Head)",
    features: ["Hot Towel", "Straight Razor", "Massage", "Mini Head-Acial"],
    price: "45",
    time: "50",
  },
  {
    id: 11,
    serviceName: "Hot Towel Shave (Head & Beard)",
    serviceDescription: "",
    features: [
      "Hot Towel",
      "Straight Razor",
      "Massage",
      "Mini Facial & Head-Acial",
    ],
    price: "60",
    time: "75",
  },
  {
    id: 12,
    serviceName: "Express Facial",
    serviceDescription: "",
    features: ["Facial", "Exfoliate & Moisturize", "Hot Towel", "Massage"],
    price: "45",
    time: "50",
  },
  {
    id: 13,
    serviceName: "Shampoo",
    serviceDescription: "",
    features: ["Shampoo", "Conditioner"],
    price: "10",
    time: "10",
  },
  {
    id: 14,
    serviceName: "Shampoo & Style",
    serviceDescription: "",
    features: ["Shampoo", "Conditioner", "Blow Dry", "Style of Choice"],
    price: "30+",
    time: "45",
  },
];

const categories = ["All", "Men", "Women", "Children"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="bg-white min-h-screen">
      <NavBar />

      <main className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Services Offered
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>

          <div className="mt-6">
            <div className="flex flex-wrap justify-center items-center text-center space-x-2">
              <p className="text-center">Filter by: </p>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-purple-400 text-gray-900"
                      : "bg-gray-100 text-gray-900"
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {services
          .filter((service) => {
            if (selectedCategory === "All") {
              return true;
            } else if (selectedCategory === "Men") {
              return (
                service.serviceName.includes("Men's") ||
                service.serviceName.includes("Boy's")
              );
            } else if (selectedCategory === "Women") {
              return (
                service.serviceName.includes("Women's") ||
                service.serviceName.includes("Girl's")
              );
            } else if (selectedCategory === "Children") {
              return (
                service.serviceName.includes("Boy's") ||
                service.serviceName.includes("Girl's")
              );
            } else {
              return false;
            }
          })
          .map((service) => (
            <div
              key={service.id}
              className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 my-6 sm:my-8 lg:mx-0 lg:flex lg:max-w-none"
            >
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  {service.serviceName}
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {service.serviceDescription}
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Book now, pay later
                    </p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        ${service.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                        USD
                      </span>
                    </p>
                    <a
                      href="#"
                      className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Book Now
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      {service.time} minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}
