import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";
import { useRouter } from "next/router";
import { MenuItem } from "@/types_and_interfaces/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import LogOutComponent from "@/components/log-out";


const NavMenu = ({ num = false }) => {
  const router = useRouter()

  return (
    <>
      <ul>
        {menu_data.map((menu: MenuItem, index) =>
          menu.has_dropdown ? (
            <li key={menu.id} className="has-dropdown">
              <Link className={`${router.asPath == menu.link && 'active'}`} href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
              {menu.has_dropdown && (
                <ul className="sub-menu">
                  {menu.sub_menus && menu.sub_menus.map((sub_m, i) => (
                    <li key={i}>
                      <Link href={sub_m.link}>{sub_m.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={menu.id}>
              <Link className={`${router.asPath == menu.link && 'active'}`} href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default NavMenu;
