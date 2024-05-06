import { createClient } from "../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("about");
  return (
    <>
      <Link href={"/home"} className="mx-2 py-2">
        about
      </Link>
      <div className="py-6">
        <PrismicRichText field={page.data.title} />
        <PrismicNextImage field={page.data.image} className="" />
      </div>
    </>
  );
}
