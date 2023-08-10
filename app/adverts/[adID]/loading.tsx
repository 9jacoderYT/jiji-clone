import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className=" items-center justify-center">
      <CircularProgress
        color="success"
        determinate={false}
        variant="solid"
        size="lg"
      />
    </div>
  );
}
