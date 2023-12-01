import useNavigation from "@/app/hooks/navigation.hook";
import { Link } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  url: string;
  children: ReactNode;
  className?: string;
};

const CustomLink: FC<Props> = ({ url = "/", children, className }) => {
  const { to } = useNavigation();

  return (
    <Link
      className={className}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        to(url);
      }}
      href={url}
      rel="noopener noreferrer"
      style={{ textDecoration: "none", width: "inherit" }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
