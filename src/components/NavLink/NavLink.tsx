import { ReactNode } from "react";

type NavLinkPropsType = {
  link: string,
  active?: boolean,
  mobile?: boolean,
  children: ReactNode | ReactNode[] | null
};

const NavLink = ({ link, active, mobile, children }: NavLinkPropsType) => {
  return (
    <a
      href={link}
      className={`rounded-full px-4 py-3 text-base font-medium whitespace-nowrap ${active ? "text-white bg-[#27419b]": "text-[#d1f2ff] hover:bg-[#27419b] hover:text-white"} ${mobile ? "block" : ""}`}
    >
      {children}
    </a>
  );
};

export default NavLink;