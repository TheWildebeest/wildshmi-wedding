import Link from "next/link";
import styles from "./styles.module.css";

const { active } = styles;

interface Props {
  basePath?: string;
  text: string;
  href: string;
  isActive: boolean;
}

const NavItem = ({ basePath, text, href, isActive }: Props) => {
  return (
    <Link href={basePath + href}>
      <span className={`nav-item ${isActive ? active : ""}`}>{text}</span>
    </Link>
  );
};

export default NavItem;
