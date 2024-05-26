import React from "react";
import { ProductsData } from "../Data/data";
import { FaStar } from "react-icons/fa";

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary font-bold">
            Top Selling Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, sed.
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((item) => (
              <div
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                className="space-y-3"
                key={item.id}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[150px] h-[220px] object-cover rounded-md border borde-[4px] duration-300 hover:border-gray-500"
                />
                <div className="mt-2  ">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>{item.color}</p>
                  <div className="flex items-center gap-1 ">
                    <FaStar className="text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
