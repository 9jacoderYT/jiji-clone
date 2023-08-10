import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

interface MenuListProps {
  logo: string;
  href: string;
  title: string;
  keyword: string;
}

export default function MenuList({
  logo,
  href,
  title,
  keyword,
}: MenuListProps) {
  return (
    <>
      <div className="flex hover:bg-[#ebf2f7] p-1 hover:cursor-pointer">
        <span>
          <img src={logo} alt="vehicle" className="w-10 p-1" />
        </span>
        <span className="flex-1 text-sm hover:underline my-auto">
          <Link href={href}>
            <b>{title}</b>
          </Link>
        </span>
        <span className="text-right my-auto">
          <ArrowForwardIosIcon />
        </span>
      </div>
    </>
  );
}
