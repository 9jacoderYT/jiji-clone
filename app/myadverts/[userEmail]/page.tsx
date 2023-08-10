import UserAds from "@/components/userAds";
import { fetchUserAds } from "@/lib/fetchData";

export default async function page({
  params,
}: {
  params: { userEmail: string };
}) {
  const userEmail = params.userEmail;
  const ads = await fetchUserAds(decodeURIComponent(userEmail));
  

  return (
    <div className="max-w-5xl mx-auto">
      {ads?.map((ad) => (
        <UserAds data={ad} key={ad.id} />
      ))}
    </div>
  );
}
