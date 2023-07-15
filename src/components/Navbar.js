import React from "react";
import img1 from "../images/Logo%20.png";
import { IconButton, Menu, MenuButton, MenuItem, MenuList, useMediaQuery } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import navData from "./navbarData";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const isNonMobile = useMediaQuery("(min-width: 992px)");
  const navigate = useNavigate();

  return (
    <>
      <img className="logo1" src={img1} alt="logo" />
      {isNonMobile[0] ? (
        <div className="btngroup" spacing="3">
          {navData.map((e) => (
            <Link
              key={e.name}
              to={e.path}
              className="navBtn"
              variant="primaryGhost"
              disabled={e.path === "#"}
            >
              {e.name}
            </Link>
          ))}
        </div>
      ) : (
        <Menu>
          <MenuButton
            aria-label="Options"
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {navData.map((e) => (
              <MenuItem
                key={e.name}
                disabled={e.path === "#"}
                onClick={() => navigate(e.path)}
              >
                {e.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default Navbar;


