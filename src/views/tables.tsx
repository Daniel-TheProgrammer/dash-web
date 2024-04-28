import {
  Box,
  Typography,
  Button,
  styled,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Table,
  TextField,
  Modal,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormGroup,
  InputAdornment,
} from "@mui/material";
import { AddPlus, Close, Delete, DownLoad, Search } from "../icon";
import { useState } from "react";

const AddButton = styled(Button)({
  fontSize: "16px",
  lineHeight: "22px",
  color: "white",
  minHeight: "56px",
  width: "119px",
  borderRadius: "8px",
  backgroundColor: "rgba(66,178,119,1.0)",
  "&:hover": {
    backgroundColor: "#42B277",
    boxShadow: "none",
  },
});

const TextInput = styled(TextField)({
  color: "white",
  minHeight: "48px",
  flexGrow: 1,
  borderRadius: "8px",
  backgroundColor: "#F2F2F2",
  outline: "none",
  border: "none",
});

export const TableView = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);

  const handleFetch = async () => {
    try {
      let apiUrl = import.meta.env.VITE_APP_API_ENDPOINT;
      if (!apiUrl) {
        apiUrl = "/src/response.json";
      }
      const response = await fetch(`${apiUrl}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDownload = async (id: number, url: string, fileName: string) => {
    try {
      const apiUrl = import.meta.env.VITE_APP_API_ENDPOINT; // Check if API endpoint exists in environment variable
      if (apiUrl) {
        // If API endpoint exists, fetch from there using the single ID
        const response = await fetch(
          `${apiUrl}/api/sessions/registers/${id}/export`
        );
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        // If API endpoint doesn't exist, fetch directly from the file URL
        //const response = await fetch(url);
        //const blob = await response.blob();
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("No file available");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      let newData = [...data];
      const apiUrl = import.meta.env.VITE_APP_API_ENDPOINT;
      if (apiUrl) {
        await fetch(`${apiUrl}/api/sessions/registers/${id}/`, {
          method: "DELETE",
        });
      } else {
        newData = newData.filter((item: { id: number }) => item?.id !== id);
      }
      setData(newData);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            paddingX: "20px",
            paddingTop: "40px",
            paddingBottom: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
            width: "513px",
            minHeight: "323px",
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "28px",
              right: "28px",
              cursor: "pointer",
            }}
          >
            <Close />
          </span>
          <Box>
            <Typography fontSize="28px" fontWeight={700}>
              Импорт файла
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                paddingY: "24px",
              }}
            >
              <TextInput />
              <Button
                sx={{
                  width: "100px",
                  minHeight: "48px",
                  border: "1px solid #A6A8A9",
                  color: "#777",
                  backgroundColor: "#fff",
                }}
              >
                Обзор
              </Button>
            </Box>
          </Box>
          <Box>
            <FormControl>
              <FormGroup
                sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                <FormControlLabel
                  control={
                    <input type="checkbox" style={{ marginRight: "8px" }} />
                  }
                  label="Проверить ИНН"
                />
                <FormControlLabel
                  control={
                    <input type="checkbox" style={{ marginRight: "8px" }} />
                  }
                  label="Проверить адрес"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
              marginTop: "43px",
            }}
          >
            <Button
              sx={{
                width: "100px",
                minHeight: "48px",
                border: "1px solid #A6A8A9",
                color: "#777",
                backgroundColor: "#fff",
              }}
              onClick={handleClose}
            >
              Отмена
            </Button>
            <Button
              sx={{
                width: "158px",
                minHeight: "48px",
                color: "#fff",
                backgroundColor: "#42B277",
              }}
              variant="contained"
              onClick={handleFetch}
            >
              Импортировать
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box
        sx={{
          padding: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "44px",
          }}
        >
          <Typography
            sx={{ fontSize: "24px", fontMedium: "700", color: "#2B2D33" }}
          >
            Импорт файлов
          </Typography>
          <AddButton
            startIcon={<AddPlus />}
            variant="contained"
            onClick={handleOpen}
          >
            Импорт
          </AddButton>
        </Box>
        <Box
          sx={{
            marginBottom: "18px",
            gap: "8px",
            alignItems: "center",
            display: "flex",
          }}
        >
          <TextField
            sx={{ height: "48px", width: "315px" }}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-select-currency"
            select
            defaultValue="Статус"
            sx={{
              width: "237px",
              border: "none",
              outlien: "none",
              backgroundColor: "#F2F2F2",
              marginTop: "9px",
            }}
          >
            <option>Статус</option>
          </TextField>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Обработан"
              sx={{ fontSize: "12px", marginTop: "6px", marginLeft: "16px" }}
            />
          </FormGroup>
        </Box>
        <TableContainer
          component={Box}
          sx={{
            backgroundColor: "#FFF",
            borderRadius: "4px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>ID</TableCell>
                <TableCell align="left">Название файла</TableCell>
                <TableCell align="left">Стату</TableCell>
                <TableCell align="left">Дата загрузки</TableCell>
                <TableCell align="left">Кол-во кредитных договоров</TableCell>
                <TableCell align="left">Загружено пользователем</TableCell>{" "}
                <TableCell align="center">Действия</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data?.map(
                (row: {
                  id: number;
                  cession?: null;
                  file: {
                    name: string;
                    url: string;
                  };
                  credits_count: number;
                  status: {
                    code: string;
                    name: string;
                    color: string;
                  };
                  created_by: {
                    id: number;
                    username: string;
                    full_name: string;
                  };
                  created_at: string;
                }) => (
                  <TableRow key={row?.id}>
                    <TableCell component="th" scope="row">
                      {row?.id}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        color: "#4785EE",
                      }}
                    >
                      {row?.status.code}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        color: "#42B277",
                      }}
                    >
                      {row?.status.name}
                    </TableCell>
                    <TableCell align="left">{row?.file.url}</TableCell>
                    <TableCell align="left">{row?.credits_count}</TableCell>
                    <TableCell align="left">
                      {row?.created_by.username}
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            handleDownload(row.id, row.file.url, row.file.name)
                          }
                        >
                          <DownLoad />
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                          onClick={() => handleDelete(row.id)}
                        >
                          <Delete />
                        </span>
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {!data.length && (
          <div
            style={{
              textAlign: "center",
              color: "#2B2D33",
              marginTop: "5px",
            }}
          >
            No data
          </div>
        )}
      </Box>
    </>
  );
};
