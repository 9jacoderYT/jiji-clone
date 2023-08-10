import AllAds from "@/components/AllAds";
import { searchAdsByTitle } from "@/lib/fetchData";
import React from "react";

export default async function Search({ params }: { params: { slug: string } }) {
  const ads = await searchAdsByTitle(params.slug);
  console.log(ads);

  return (
    <div>
      <AllAds ads={ads} />
    </div>
  );
}
