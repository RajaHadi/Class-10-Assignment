import React from "react";
import Image from "next/image";

const CardComponent = () => {
  return (
    <div>
      <h1 className="text-center font-serif text-3xl md:text-4xl font-extrabold text-blue-600 p-5 lg:text-5xl">
        Card's Assignment(class-10)
      </h1>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-around mt-5">
        {/* CARD1 */}
        <div className="md:w-6/12 w-full lg:w-3/12">
          <div className="flex justify-center">
            <Image
              src={"/product1.jpg"}
              width={300}
              height={300}
              alt="Product1"
              className="h-48 w-60 "
            />
          </div>
          <p className="my-4 text-center text-blue-700 font-medium">
            Rs/=10,000
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 rounded-md px-4 py-2 font-semibold">
              Buy Now
            </button>
          </div>
        </div>
        {/* CARD2 */}
        <div className=" my-8 md:my-0 md:w-6/12 w-full lg:w-3/12">
          <div className="flex justify-center">
            <Image
              src={"/product2.png"}
              width={300}
              height={300}
              alt="Product1"
              className="h-48 w-60 "
            />
          </div>
          <p className="my-4 text-center text-blue-700">Rs/=5,000</p>
          <div className="flex justify-center">
            <button className="bg-blue-600 rounded-md px-4 py-2 font-semibold">
              Buy Now
            </button>
          </div>
        </div>

        
        <div className="md:w-6/12  mb-6 lg:w-3/12">
          <div className="flex justify-center">
            <Image
              src={"/product3.jpg"}
              width={300}
              height={300}
              alt="Product1"
              className="h-48 w-60 "
            />
          </div>
          <p className="my-4 text-center text-blue-700 font-medium">
            Rs/=8,000
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 rounded-md px-4 py-2 font-semibold">
              Buy Now
            </button>
          </div>
        </div>
        
      </div>
     
      
    </div>
  );
};

export default CardComponent;
