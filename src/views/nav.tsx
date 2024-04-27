import { Avatar, Box, Typography } from "@mui/material";

export const Nav = () => {
  return (
    <Box
      boxShadow="0px 1px 10px 0px rgba(166, 168, 169, 0.20)"
      sx={{
        display: "flex",
        height: "72px",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "0 32px",
      }}
    >
      <Box
        sx={{
          width: "67px",
          height: "66px",
        }}
      >
        <img
          src="/assets/logo.png"
          alt="logo"
          style={{ display: "block", width: "100%", height: "100%" }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Typography sx={{ fontSize: "16px", color: "#2B2D33" }}>
          Фамилия Имя
        </Typography>
        <Avatar
          src="/assets/ic_person_48px.png"
          sx={{ width: "40px", height: "40px", backgroundColor: "#D9D9D9" }}
        />
      </Box>
    </Box>
  );
};
