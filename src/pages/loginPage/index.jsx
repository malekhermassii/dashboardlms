import { Box, Typography, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    return (
    <Box>
      <Box
        width="100%"
        backgroundColor={"#fff"}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="#ffd21f">
           LMS Dashboard
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "80%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={"#ffffff"}
        boxShadow="9px 4px 23px -8px rgba(156,148,156,1)"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to the dashboard of our learning managment system !
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
