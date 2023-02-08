import classes from "./sidebar.module.css";

export default function Sidebar(props) {
  const selectCategory = (e) => {
    e.preventDefault();
    const category = e.target.id;
    return props.selectCategory(category);
  };

  const categories = [
    `men's clothing`,
    `women's clothing`,
    `jewelery`,
    `electronics`,
  ];

  return (
    <div className={classes.sidebar}>
      <ul className={classes["sidebar-list"]}>
        {categories.map((category, key) => {
          return (
            <li key={key}>
              <a
                id={category}
                href={`/${category.trim().replace(" ", "")}`}
                onClick={selectCategory}
              >
                {category}
              </a>
            </li>
          );
        })}
      </ul>
      <div className={classes["sidebar-transparent"]}></div>
    </div>
  );
}
