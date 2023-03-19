import Link from "next/link";

interface Props {
  text: string;
  href: string;
  active: boolean
}

const NavItem = ({ text, href, active }: Props) => {
  return (
    <Link href={href}>
      <span
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </span>
    </Link>
  );
};

export default NavItem;