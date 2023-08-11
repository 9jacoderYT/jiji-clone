"use client";
import { adData } from "@/lib/types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Ads(ad: adData) {
  console.log(ad);
  return (
    <>
      <div className="lg:flex m-10 lg:space-x-5">
        <div className="lg:flex-1 border-t-8 border-green-600 bg-white pb-10">
          <img src={ad.imagesUrl[0]} alt={ad.title} className="w-full" />
          <div className="m-5">
            <p className="text-2xl font-bold">{ad.title}</p>

            {ad.negotiable && (
              <span className="text-green-600">Negotiable</span>
            )}

            <p className="my-5  text-gray-400">
              <LocationOnIcon /> {ad.location} - {ad.contactNumber}
            </p>

            <a href={ad.youtube} className="mt-5">
              <YouTubeIcon /> Open on Youtube
            </a>

            <div className="divider"></div>

            <p className="my-5">{ad.description}</p>
            <div className="divider"></div>

            <div className="flex space-x-5">
              {ad.imagesUrl.map((image: string, index: number) => (
                <span key={index}>
                  <img
                    src={image}
                    className="w-[100px] h-[100px]"
                    alt="AdImage"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className=" lg:w-[30%] hidden lg:inline">
          <div className="bg-white p-5 text-sm">
            <div className="font-bold text-center">Safety tips</div>
            <ol>
              <li>Don't pay in advance, including for delivery</li>

              <li>Meet the seller at a safe public place</li>

              <li>Inspect the item and ensure it's exactly what you want</li>

              <li>
                On delivery, check that the item delivered is what was inspected
              </li>

              <li>Only pay when you're satisfied</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
