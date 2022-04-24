import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

import device from "../../../../../styles/device";

const Anchor = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 0.67rem;

  @media (${device.laptop}) {
    font-size: 1rem;
  }
`;

function Dropdown({ link, LinkComponent, hovering, setHovering, asPath }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const linkLabelLowercase = link.label.toLowerCase();
  const isBooknow = link.label === "Book Now";

  const isActivelink = link.href.includes(asPath);

  const getBGColor = () => {
    if (isBooknow) {
      return "#350313";
    } else if (isActivelink && asPath !== "/") {
      return "#E1C2CE";
    } else {
      return "#AA4465";
    }
  };

  const bgColor = getBGColor();

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const mouseEnter = () => {
    setHovering(link.label.toLowerCase());
    setOpen(true);
  };

  const mouseLeave = (e) => {
    setHovering("");
    handleClose(e);
    try {
      const { relatedTarget } = e;
      if (relatedTarget.getAttribute("id") === "composition-button") {
        const { innerText } = relatedTarget;
        setHovering(innerText.toLowerCase());
      }
    } catch {
      // Not sure yet.
    }
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      onMouseEnter={mouseEnter}
      onMouseLeave={(e) => mouseLeave(e)}
    >
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          sx={{
            color: "#ffffff",
            backgroundColor: `${bgColor}`,
          }}
        >
          {!link.href.includes("resnexus") && (
            <LinkComponent href={link.href}>
              <Anchor>{link.label}</Anchor>
            </LinkComponent>
          )}
          {link.href.includes("resnexus") && (
            <Anchor href={link.href} rel="noopener noreferrer" target="_blank">
              {link.label}
            </Anchor>
          )}
        </Button>
        {linkLabelLowercase === hovering && link.dropdown !== undefined && (
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                    >
                      <MenuItem style={{ height: 0, width: 0, opacity: 0 }}>
                        a
                      </MenuItem>
                      {link.dropdown.map((dropLink) => {
                        const isActiveDropLink = dropLink.href.includes(asPath);
                        const getBGDropdown = () => {
                          if (isBooknow) {
                            return "#350313";
                          } else if (isActiveDropLink && asPath !== "/") {
                            return "#E1C2CE";
                          } else {
                            return "#ffffff";
                          }
                        };

                        const dropdownColor = getBGDropdown();
                        return (
                          <MenuItem
                            onClick={handleClose}
                            key={dropLink.href + dropLink.label}
                            sx={{
                              backgroundColor: `${dropdownColor}`,
                            }}
                          >
                            <LinkComponent href={dropLink.href}>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "#333",
                                }}
                              >
                                {dropLink.label}
                              </a>
                            </LinkComponent>
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        )}
      </div>
    </Stack>
  );
}

export default Dropdown;
