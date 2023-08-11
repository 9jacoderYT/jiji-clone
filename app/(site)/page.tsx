import AllAds from "@/components/AllAds";
import Header from "@/components/header";
import Menu from "@/components/menu";
import Slider from "@/components/slider";
import { fetchAllAds } from "@/lib/fetchData";

export default async function Home() {
  const allAds = await fetchAllAds();

  return (
    <main>
      <div className="bg-gradient-to-r from-green-500 to-green-700">
        <Header />
      </div>

      <div className="max-w-6xl mx-auto flex mt-3 ">
        <div className="hidden lg:inline mr-5">
          <Menu />
        </div>

        <div className="flex-1">
          <div className="hidden lg:inline">
            <Slider />
          </div>

          <AllAds ads={allAds} />
        </div>
      </div>
    </main>
  );
}
