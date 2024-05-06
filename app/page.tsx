import { createClient } from "../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("home");
  return (
    <>
      <Link href={"/home"} className="mx-2 py-2">
        about
      </Link>
      <div className="py-6">
        <h1>{page.data.site_tile}</h1>
        <h1>{page.data.description}</h1>

        <PrismicNextImage field={page.data.og_image} className="" />
      </div>
    </>
  );
}
