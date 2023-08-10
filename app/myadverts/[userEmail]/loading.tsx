"use client";
import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto m-4">
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        animation="wave"
        sx={{ borderRadius: "20px", margin: "5px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        animation="wave"
        sx={{ borderRadius: "20px", margin: "5px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        animation="wave"
        sx={{ borderRadius: "20px", margin: "5px" }}
      />
      <Skeleton
        variant="rectangular"
        width="100%"
        height={150}
        animation="wave"
        sx={{ borderRadius: "20px", margin: "5px" }}
      />
    </div>
  );
}
