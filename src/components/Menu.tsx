import React, { useEffect, useState } from "react";
import { MenuProps, Item } from "@/types";
import { handbuck } from "@/utils/font";
import Image from "next/image";

const menu = [
  {
    image: "",
    title: "Fried Rice",
    description:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    amout: "200",
  },
  {
    image: "",
    title: "Fried Rice",
    description:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    amout: "200",
  },
  {
    image: "",
    title: "Fried Rice",
    description:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    amout: "200",
  },
  {
    image: "",
    title: "Fried Mango",
    description:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    amout: "200",
  },
  {
    image: "",
    title: "Fried Onions",
    description:
      "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur.",
    amout: "200",
  },
];

const Menu: React.FC<MenuProps> = ({ onSetPositions }) => {
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    const pageSize = window.innerWidth;
    setPageSize(pageSize);
  }, []);

  useEffect(() => {
    const menuPosition = window.document.getElementById("menu");
    if (menuPosition && onSetPositions)
      onSetPositions((prevState) => ({
        ...prevState,
        menu: menuPosition?.offsetTop,
      }));
  }, []);
  return (
    <section className="mx-auto max-w-6xl w-5/6" id="menu">
      <h2
        className={`${handbuck.className} pt-12 lg:pt-28 text-center text-6xl`}
      >
        Menu
      </h2>
      <div>
        {pageSize <= 500 ? (
          <MenuSmallScreen />
        ) : (
          <MenuLargeScreen menu={menu} />
        )}
      </div>
    </section>
  );
};

const MenuSmallScreen = () => {
  return menu.map((item, index) => <div key={index}></div>);
};

const MenuLargeScreen: React.FC<MenuProps> = ({ menu }) => {
  const [renderedMenu, setRenderedMenu] = useState<Item[]>([]);
  const [menuCursor, setMenuCursor] = useState(0);

  useEffect(() => {
    addItemToScreen(
      renderedMenu,
      menuCursor,
      menu,
      setRenderedMenu,
      setMenuCursor
    );
  }, []);
  return (
    <div>
      {renderedMenu.map((item, index) => (
        <>
          <div key={index}>
            <div>
              <Image src={item.image} alt="" fill />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.amout}</p>
          </div>
        </>
      ))}
      {menuCursor < menu.length && (
        <button
          onClick={() =>
            addItemToScreen(
              renderedMenu,
              menuCursor,
              menu,
              setRenderedMenu,
              setMenuCursor
            )
          }
        >
          ReadMore
        </button>
      )}
    </div>
  );
};

const CURSOR_VALUE = 3;
function addItemToScreen(
  renderedMenu: Item[],
  menuCursor: number,
  menu: Item[],
  setRenderedMenu: React.Dispatch<React.SetStateAction<Item[]>>,
  setMenuCursor: React.Dispatch<React.SetStateAction<number>>
) {
  const itemsForRenderedMenu: Item[] = [...renderedMenu];
  const newMenuCursorPosition =
    menuCursor + CURSOR_VALUE < menu.length
      ? menuCursor + CURSOR_VALUE
      : menu.length;

  // Adds more item to renderedMenu
  for (let i = menuCursor; i < newMenuCursorPosition; i++) {
    itemsForRenderedMenu.push(menu[i]);
  }
  setRenderedMenu([...itemsForRenderedMenu]);
  setMenuCursor(newMenuCursorPosition);
}

export default Menu;
