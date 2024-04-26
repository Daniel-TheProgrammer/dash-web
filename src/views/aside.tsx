import { Box } from "@mui/material";
//import { DataBase, Profile, File, Letter, Compo3, Settings } from "../icon";



export const Aside = () => {
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
            sx={{ width: "100%", height: "100%", padding: "24px 32px" }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};


/*const MenuItems = [
  {
    icon: <DataBase />,
    name: "Database",
  },

  {
    icon: <Profile />,
    name: "Profile",
  },
  {
    icon: <Compo3 />,
    name: "Compo3",
  },
  {
    icon: <Letter />,
    name: "Lettwe",
  },
  {
    icon: <File />,
    name: "File",
  },
];
*/