"use client";
import ReportOffIcon from "@mui/icons-material/ReportOff";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
export default function error() {
  return (
    <div className="max-w-5xl mx-auto text-center p-10">
      <p className="font-bold text-2xl">Uh-Oh...</p>
      <p>
        The page you are looking for may have been moved, deleted, or possibly
        never existed.
      </p>
      <ReportOffIcon fontSize="large" />
      <h6 className="m-10" style={{ fontSize: "100px" }}>
        404
      </h6>

      <div className="hover:underline hover:cursor-pointer">
        <ArrowCircleLeftIcon />
        <a href="/">Back to Home Page</a>
      </div>
    </div>
  );
}
