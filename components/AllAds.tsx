"use client";
import { NGnaira } from "@/lib/help";
import { adData, uploadData } from "@/lib/types";
import Link from "next/link";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useEffect } from "react";

export default function AllAds({ ads }: any) {
  const handleError = () => {
    if (ads.length === 0) {
      throw new Error();
    }
  };
  useEffect(() => {
    handleError();
  });

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {ads?.map((ad: any) => (
        <>
          <div className="bg-white m-2">
            <img
              src={ad.imagesUrl[0]}
              alt="Ads Image"
              className="w-full h-[150px] lg:h-[120px]"
            />

            <p className="m-2">
              <Link href={`/adverts/${ad.id}`} className="hover:underline">
                {ad.title}
              </Link>
              <br />
              <span className="text-sm text-green-600 m-1">
                {NGnaira.format(ad.price)}
              </span>
            </p>

            <div className="ml-3 text-gray-500">
              <MyLocationIcon /> - {ad.location}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
