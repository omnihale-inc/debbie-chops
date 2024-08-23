import React from "react";

const menu = [
  { image: "", title: "", description: "", amout: "" },
  { image: "", title: "", description: "", amout: "" },
  { image: "", title: "", description: "", amout: "" },
  { image: "", title: "", description: "", amout: "" },
  { image: "", title: "", description: "", amout: "" },
  { image: "", title: "", description: "", amout: "" },
  { image: "", title: "", description: "", amout: "" },
];

const Menu: React.FC = () => {
  return (
    <section>
      <h2>Menu</h2>
      <div>
        {menu.map((item, index) => (
          <div key={index}></div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
