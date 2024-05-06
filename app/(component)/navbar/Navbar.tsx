import React from "react";
import { createClient } from "../../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default async function Navbar() {
  const client = await createClient();
  const navbar = await client.getSingle("navbar");
  return (
    <>
      <div className="flex justify-between ">
        <PrismicNextImage
          field={navbar.data.navbar_logo}
          className="w-[18%] h-[2%] mx-2 "
          alt=""
        />
        <div className=" w-[18%] h-[2%] mt-2">
          <PrismicRichText field={navbar.data.navbar_text} />
        </div>
        <PrismicNextImage
          field={navbar.data.navbar_text1}
          className="mr-4 w-[18%] h-[2%] "
          alt=""
        />
      </div>
      <div className="bg-yellow-500">
        <div className="ml-16">
          <h1 className="text-7xl text-white pt-[8%]">
            {navbar.data.hero_text}
          </h1>
          <h1 className="mt-4">{navbar.data.hero_description}</h1>
          <PrismicNextImage
            field={navbar.data.hero_image}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
