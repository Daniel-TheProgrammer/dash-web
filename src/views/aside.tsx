import { Box } from "@mui/material";
import { DataBase, Profile, File, Letter, Compo3, Settings } from "../icon";
import { MenuItem } from "../components/menuitem";
import { useLocation } from "react-router-dom";

export const Aside = () => {
  const location = useLocation();
  return (
    <>
      <Box
        boxShadow="1px 0px 10px 0px rgba(166, 168, 169, 0.20)"
        sx={{
          width: "400px",
        }}
      >
        <Box position="fixed" top={0} left={0} height="100%" width={400}>
          <Box height={72}></Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              justifyCotent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {MenuItems.map((item, index: number) => {
                return (
                  <MenuItem
                    name={item.name}
                    icon={item.icon}
                    key={index}
                    links={item.children}
                  />
                );
              })}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor:
                    location.pathname === "" ? "#42B277" : "transparent",
                  color: location.pathname === "" ? "#fff" : "#2B2D33",
                  padding: "10px",
                  borderRadius: "4px",
                }}
              >
                <Settings />
                <span
                  style={{
                    marginLeft: "8px",
                  }}
                >
                  Settings
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const MenuItems = [
  {
    icon: <DataBase />,
    name: "Организации",
  },

  {
    icon: <Profile />,
    name: "Profile",
    children: [],
  },
  {
    icon: <Compo3 />,
    name: "Compo3",
    children: [],
  },
  {
    icon: <Letter />,
    name: "Корреспонденция",
    children: [],
  },
  {
    icon: <File />,
    name: "Работа",
    children: ["Аналитика", "Договоры", "Импорт"],
  },
];
