"use client";
import { useRouter } from "next/navigation";

export default function Slider() {
  const router = useRouter();
  return (
    <div className="flex space-x-5">
      <div className="carousel">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/slider1.png" className="w-full" alt="sliderImage" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/slider2.png" className="w-full" alt="sliderImage" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="/ad.png"
            alt="ad"
            className="hover:cursor-pointer"
            onClick={() => router.push("/create")}
          />
        </div>
      </div>
    </div>
  );
}
