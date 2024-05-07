import React from "react";
import { createClient } from "../../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
export default async function Products() {
  const client = await createClient();
  const products = await client.getSingle("products");
  return (
    <>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-10 mt-12 gap-y-4 cursor-pointer">
        <div>
          <PrismicNextImage
            field={products.data.product_1}
            alt=""
            className="w-[357px] h-[300px]"
          />
          <h1 className="text-2xl mt-[32px]">
            {products.data.products_1_Text}
          </h1>
          <button className="bg-pink-200 rounded-md px-2 py-1 mt-3 hover:bg-pink-500">
            <h1 className="text-orange-600 hover:text-orange-800 text-xl font-bold">
              {products.data.button_product_1}
            </h1>
          </button>
        </div>
        <div>
          <PrismicNextImage
            field={products.data.product_2}
            alt=""
            className="w-[357px] h-[300px]"
          />
          <h1 className="text-2xl mt-[32px]">
            {products.data.products_1_Text}
          </h1>
          <button className="bg-pink-200 rounded-md px-2 py-1 mt-3  hover:bg-pink-500">
            <h1 className="text-orange-600 hover:text-orange-800  text-xl font-bold">
              {products.data.button_product_2}
            </h1>
          </button>
        </div>

        <div>
          <PrismicNextImage
            field={products.data.product_3}
            alt=""
            className="w-[357px] h-[300px]"
          />
          <h1 className="text-2xl mt-[32px]">
            {products.data.products_1_Text}
          </h1>
          <button className="bg-pink-200 rounded-md px-2 py-1 mt-3  hover:bg-pink-500">
            <h1 className="text-orange-600 hover:text-orange-800  text-xl font-bold">
              {products.data.button_product_3}
            </h1>
          </button>
        </div>
        <div>
          <PrismicNextImage
            field={products.data.product_4}
            alt=""
            className="w-[357px] h-[300px]"
          />
          <h1 className="text-2xl mt-[32px]">
            {products.data.products_1_Text}
          </h1>
          <button className="bg-pink-200 rounded-md px-2 py-1 mt-3  hover:bg-pink-500">
            <h1 className="text-orange-600 hover:text-orange-800  text-xl font-bold">
              {products.data.button_product_4}
            </h1>
          </button>
        </div>
      </div>
    </>
  );
}
