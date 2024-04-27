import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { CaretUp, CaretDown } from "../icon";
import { useState } from "react";

export const MenuItem = ({
  name,
  links,
  icon,
}: {
  name: string;
  links: string[] | undefined;
  icon: React.ReactNode;
}) => {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const decodedPath = decodeURIComponent(location.pathname);

  const isActive = (link: string) => decodedPath === `/${name}/${link}`;
  const parentActive = () => {
    const pathIndex = decodedPath.split("/")[1]
    return pathIndex === name
  }


  return (
    <>
      {links && (
        <Box
          style={{
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: parentActive() ? "#42B277" : "transparent",
              color: parentActive() ? "#fff" : "#2B2D33",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>{icon}</span>
              <span style={{ marginBottom: "5px", marginLeft: "8px" }}>
                {name}
              </span>
            </Box>
            <span onClick={() => setOpen(!open)}>
              {open ? <CaretUp /> : <CaretDown />}{" "}
            </span>
          </Box>
          {open &&
            links.length > 0 &&
            links.map((link: string, index: number) => {
              return (
                <Box
                  key={index}
                  sx={{
                    paddingLeft: "50px",
                    paddingY: "10px",
                    paddingRight: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  {isActive(link) && (
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        backgroundColor: "#42B277",
                      }}
                    ></span>
                  )}
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        marginBottom: "3.6px",
                        color: isActive ? "#42B277" : "#2B2D33",
                      };
                    }}
                    to={`/${name}/${link}`}
                  >
                    {link}
                  </NavLink>
                </Box>
              );
            })}
        </Box>
      )}
      {!links && (
        <NavLink
          to={`/`}
          className="routelink"
          style={{
            backgroundColor:
              location.pathname === "/" ? "#42B277" : "transparent",
            color: location.pathname === "/" ? "#fff" : "#2B2D33",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <Box display="flex" alignItems="items-center">
            <span style={{ marginRight: "8px" }}>{icon}</span>
            {name}
          </Box>
        </NavLink>
      )}
    </>
  );
};
