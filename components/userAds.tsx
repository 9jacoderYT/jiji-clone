"use client";
import { NGnaira } from "@/lib/help";
import { adData } from "@/lib/types";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { deleteDocById } from "@/lib/deleteData";
import { useRouter } from "next/navigation";

export default function UserAds(data: any) {
  const router = useRouter();
  const ad = data.data;

  const deleteAd = async () => {
    const result = await deleteDocById(ad.id);

    if (result.error) {
      alert("Error deleting Ad");
    }
    alert(result.message);
    router.refresh();
  };

  return (
    <>
      <div className="flex border-solid border-[1px] border-gray-400 m-4 rounded-lg bg-white hover:scale-105 transition hover:cursor-pointer hover:shadow-lg">
        <div className="w-[25%]">
          <img
            src={ad.imagesUrl[0]}
            alt="ad image"
            className="w-full h-full rounded-l-lg"
          />
        </div>

        <div className="flex-1 p-2">
          <Link
            href={`/adverts/${ad.id}`}
            className="font-bold line-clamp-2 hover:underline"
          >
            {ad.title}
          </Link>
          <p className="font-bold text-green-600">
            {NGnaira.format(ad.price)}
            {ad.negotiable && <span>,{"  "}Negotiable</span>}
          </p>
          <small>open</small>

          <div className="my-2">
            <span className="bg-[#ebf2f7] text-[10px] p-3 mr-5">
              {Math.floor(Math.random() * 100)} views
            </span>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              size="small"
              onClick={deleteAd}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
