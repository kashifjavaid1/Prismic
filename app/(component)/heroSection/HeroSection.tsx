import React from "react";
import { createClient } from "../../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
export default async function HeroSection() {
  const client = await createClient();
  const response = await client.getSingle("hero");

  return (
    <>
      <div className="bg-pink-50 mt-20">
        <div className="flex justify-center  pt-20 text-5xl text-orange-600 mx-10  cursor-pointer">
          <h1>{response.data.hero_title}</h1>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  mt-[7%]">
          <div className="mx-10 py-6">
            <PrismicNextImage
              field={response.data.hero_image_1}
              alt=""
              className="mx-auto "
            />
            <h1 className="flex justify-center text-2xl font-bold ">
              {response.data.hero_location}
            </h1>
            <p className="mx-10 font-extralight py-1">
              {response.data.hero_description}
            </p>
          </div>

          <div>
            <PrismicNextImage
              field={response.data.hero_image_2}
              alt=""
              className="mx-auto"
            />
            <h1 className="flex justify-center text-2xl font-bold ">
              {response.data.hero_location_2}
            </h1>
            <p className="mx-10 font-extralight py-1">
              {response.data.hero_description_1}
            </p>
          </div>
          <div>
            <PrismicNextImage
              field={response.data.hero_image_3}
              alt=""
              className="mx-auto"
            />
            <h1 className="flex justify-center text-2xl font-bold ">
              {response.data.hero_location_3}
            </h1>
            <p className="mx-10 font-extralight py-1">
              {response.data.hero_description_3}
            </p>
          </div>
          <div>
            <PrismicNextImage
              field={response.data.hero_image_4}
              alt=""
              className="mx-auto"
            />
            <h1 className="flex justify-center text-2xl font-bold ">
              {response.data.hero_location_4}
            </h1>
            <p className="mx-10 font-extralight py-1">
              {response.data.hero_description_4}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
