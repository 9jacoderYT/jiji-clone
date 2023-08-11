import UserAds from "@/components/userAds";
import { fetchUserAds } from "@/lib/fetchData";

export default async function page({
  params,
}: {
  params: { userEmail: string };
}) {
  const userEmail = params.userEmail;
  const ads = await fetchUserAds(decodeURIComponent(userEmail));

  console.log(ads);

  return (
    <div className="max-w-5xl mx-auto">
      {ads?.map((ad: any) => (
        <UserAds data={ad} key={ad.id} />
      ))}
    </div>
  );
}
