import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Nav } from "../views/nav";
import { Aside } from "../views/aside";

export default function Root() {
  return (
    <>
      <Nav />
      <Box
        sx={{
          display: "flex",
          minHeight: "calc(100vh - 72px)",
        }}
      >
        <Aside />
        <Box
          sx={{
            width: "calc(100% - 400px)",
            backgroundColor: "#F5F5F5",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
