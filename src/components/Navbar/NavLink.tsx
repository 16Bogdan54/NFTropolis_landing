import style from "./navbar.module.css";

interface INavLinkProps {
  href: string;
  text: string;
}

const NavLink = ({ href, text }: INavLinkProps) => {
  return (
    <a href={href} className={`dark:text-text-dark ${style.nav_link}`}>
      {text}
    </a>
  );
};

export default NavLink;
