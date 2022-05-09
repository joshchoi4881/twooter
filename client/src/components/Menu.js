import { Link } from "react-router-dom";

const OPTIONS = [
  { name: "play", link: "/play" },
  { name: "leaderboard", link: "/leaderboard" },
  { name: "guide", link: "/guide" },
];

const Menu = () => {
  const render = () => {
    return OPTIONS.map((option, i) => {
      const { name, link } = option;
      return (
        <Link key={i} to={link} className="menu-item">
          <span className="item-text">{name}</span>
        </Link>
      );
    });
  };
  return <div className="game-menu">{render()}</div>;
};

export default Menu;
