import Link from "next/link";

interface Props {
  handleClick: () => any;
  text: string;
  href: string;
  active: boolean
}

const NavItem = ({ text, href, active, handleClick }: Props) => {
  return (
    <Link href={href} onClick={handleClick}>
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