import Image from "next/image";
import { createClient } from "../prismicio";
import { PrismicNextImage } from "@prismicio/next";
export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");
  return (
    <>
      <h1>{page.data.site_tile}</h1>
      <h1>{page.data.description}</h1>
      <PrismicNextImage field={page.data.og_image} className="" />
    </>
  );
}
