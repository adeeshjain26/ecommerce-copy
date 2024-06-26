// Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
const categories = [
  {
    name: "Top Offer",
    imgSrc: "https://via.placeholder.com/50",
    path: "/shop",
  },
  {
    name: "Mobiles & Tablets",
    imgSrc: "https://via.placeholder.com/50",
    path: "/",
  },
  {
    name: "TVs & Appliances",
    imgSrc: "https://via.placeholder.com/50",
    path: "/",
  },
  {
    name: "Shoes",
    imgSrc: "https://via.placeholder.com/50",
    path: "/",
  },
  { name: "Fashion", imgSrc: "https://via.placeholder.com/50", path: "/shop" },

  {
    name: "Furniture",
    imgSrc: "https://via.placeholder.com/50",
    path: "/shop",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
 <div className="flex flex-wrap justify-center bg-white py-2 shadow items-center">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-gray-100 w-full sm:w-auto sm:flex-1"
            onClick={() => navigate(category.path)}
          >
            <img
              src={category.imgSrc}
              alt={category.name}
              className="h-12 w-12"
            />
            <span className="text-xs text-center mt-1">{category.name}</span>
          </div>
        ))}
      </div>

      <section className="relative bg-[url(https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1392&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Innovative Designs,{" "}
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Timeless Appeal{" "}
              </strong>
            </h1>
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>
              <a
                href="/"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grow Audience Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.webp?b=1&s=170667a&w=0&k=20&c=H5hgZid5Aji924X_NLc4t7zt1v5Qza_e33XI2VdgrlU="
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Grow your Collection
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>
              <a
                href="/"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Watches Section */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Shoes
                  </h2>
                  <p className="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>
                <a
                  href="/"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <a href="/shop" className="group block">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDXQIn16l6hPeElFnFhNEktZfBz9sIumvjg&s"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />
                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Sneakers
                      </h3>
                      <p className="mt-1 text-sm text-gray-700">1500</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/shop" className="group block">
                    <img
                      src="https://m.media-amazon.com/images/I/81nBa+4b7eL._AC_UY1000_.jpg"
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />
                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Formals
                      </h3>
                      <p className="mt-1 text-sm text-gray-700">2550</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
