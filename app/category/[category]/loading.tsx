"use client";
import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto m-4 flex space-x-3">
      <span>
        <Skeleton
          variant="rectangular"
          width={150}
          height={150}
          animation="wave"
          sx={{ margin: "5px" }}
        />
        <Skeleton
          variant="rectangular"
          width={150}
          height={20}
          animation="wave"
          sx={{ margin: "5px" }}
        />
      </span>
      <span>
        <Skeleton
          variant="rectangular"
          width={150}
          height={150}
          animation="wave"
          sx={{ margin: "5px" }}
        />
        <Skeleton
          variant="rectangular"
          width={150}
          height={20}
          animation="wave"
          sx={{ margin: "5px" }}
        />
      </span>
      <span>
        <Skeleton
          variant="rectangular"
          width={150}
          height={150}
          animation="wave"
          sx={{ margin: "5px" }}
        />
        <Skeleton
          variant="rectangular"
          width={150}
          height={20}
          animation="wave"
          sx={{ margin: "5px" }}
        />
      </span>
      <span>
        <Skeleton
          variant="rectangular"
          width={150}
          height={150}
          animation="wave"
          sx={{ margin: "5px" }}
        />
        <Skeleton
          variant="rectangular"
          width={150}
          height={20}
          animation="wave"
          sx={{ margin: "5px" }}
        />
      </span>
      <span>
        <Skeleton
          variant="rectangular"
          width={150}
          height={150}
          animation="wave"
          sx={{ margin: "5px" }}
        />
        <Skeleton
          variant="rectangular"
          width={150}
          height={20}
          animation="wave"
          sx={{ margin: "5px" }}
        />
      </span>
    </div>
  );
}
