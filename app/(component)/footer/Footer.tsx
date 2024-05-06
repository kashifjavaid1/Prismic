import React from "react";
import { createClient } from "../../../prismicio";
export default async function Footer() {
  const client = await createClient();
  const footer = await client.getSingle("footer");
  return (
    <>
      <div className="bg-black text-white pt-[6%]">
        <div className="flex justify-between mx-16 flex-wrap">
          <div>
            <h1 className="text-xl font-bold">company</h1>
            <div className="my-4">
              <h1>{footer.data.footer_text1}</h1>
              <h1>{footer.data.footer_text2}</h1>
              <h1>{footer.data.footer_text3}</h1>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Contact</h1>
            <div className="my-4">
              <h1>{footer.data.contact_text1}</h1>
              <h1>{footer.data.contact_text2}</h1>
              <h1>{footer.data.contact_text3}</h1>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Legal</h1>
            <div className="my-4 gap-2">
              <h1>{footer.data.legal_text1}</h1>
              <h1>{footer.data.legal_text2}</h1>
              <h1>{footer.data.legal_text3}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
