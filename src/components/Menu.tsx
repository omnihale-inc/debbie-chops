import React, { useEffect, useState } from "react";
import { MenuProps, Item } from "@/types";
import { handbuck } from "@/utils/font";
import Image from "next/image";
import getElementPosition from "@/utils/getElementPosition";
import restaurantData from "@/data";

const MENU = restaurantData.menu;

const Menu: React.FC<MenuProps> = ({ onSetPositions }) => {
  const [pageSize, setPageSize] = useState(0);

  useEffect(() => {
    const pageSize = window.innerWidth;
    setPageSize(pageSize);
  }, []);

  useEffect(() => {
    getElementPosition(onSetPositions, "menu");
  }, []);
  return (
    <section className="mx-auto max-w-6xl w-5/6 mb-2 lg:mb-8" id="menu">
      <h2
        className={`${handbuck.className} pt-12 lg:pt-28 text-center text-3xl lg:text-6xl`}
      >
        Menu
      </h2>
      <div>
        {pageSize <= 800 ? (
          <MenuSmallScreen />
        ) : (
          <MenuLargeScreen menu={MENU} />
        )}
      </div>
    </section>
  );
};

const MenuSmallScreen = () => {
  return (
    <div className="flex overflow-x-scroll gap-8 menu-small_screen">
      {MENU.map((menuItem, index) => (
        <div className="shrink-0 basis-64" key={index}>
          <MenuItem menuItem={menuItem} />
        </div>
      ))}
    </div>
  );
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
    <>
      <div className="grid grid-cols-3 gap-7">
        {renderedMenu.map((menuItem, index) => (
          <React.Fragment key={index}>
            <MenuItem menuItem={menuItem} />
          </React.Fragment>
        ))}
      </div>
      {menuCursor < menu.length && (
        <button
          className={`${handbuck.className} mt-14 text-center w-full lg:text-2xl text-[#ee7834]`}
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
          See More
        </button>
      )}
    </>
  );
};

function MenuItem({ menuItem }: { menuItem: Item }): React.JSX.Element {
  return (
    <div className="mt-10">
      <div className="relative h-36 lg:h-40 w-full">
        <Image
          src={menuItem.image}
          alt=""
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className={`${handbuck.className} lg:text-3xl mt-6`}>
        {menuItem.title}
      </h2>
      <p className="text-xs lg:text-sm">{menuItem.description}</p>
      {menuItem.amount && (
        <p className="mt-3 lg:mt-5 font-semibold text-sm lg:text-base">
          {menuItem.amount}
        </p>
      )}
    </div>
  );
}

const CURSOR_VALUE = 3;
function addItemToScreen(
  renderedMenu: Item[],
  menuCursor: number,
  menu: Item[],
  setRenderedMenu: React.Dispatch<React.SetStateAction<Item[]>>,
  setMenuCursor: React.Dispatch<React.SetStateAction<number>>
) {
  const itemsForRenderedMenu: Item[] = [...renderedMenu];

  // Increase the cursor value by if it hasn't exceed the menu length
  // otherwise the newMenuCursorPosition will be set to the menu length
  // value
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
