import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { dataContact } from "../../utils/constant";

const Contact = () => {
  return (
    <Box
      sx={{
        padding: 3,
        background: "white",
        textAlign: "center",
        marginBottom: 4,
        borderRadius: 4,
        border: "7px dashed #e8eefc",
      }}
    >
      <img
        height={150}
        src="https://phongtro123.com/images/support-bg.jpg"
        alt=""
      />
      <Typography marginBottom={3}>
        Liên hệ với chúng tôi nếu bạn cần hỗ trợ:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {dataContact.map((item, idx) => {
          return (
            <Box key={idx}>
              <Typography sx={{ color: "orange", fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: "blue", fontWeight: 600 }}>
                Dien thoai: {item.phone}
              </Typography>
              <Typography sx={{ color: "blue", fontWeight: 600 }}>
                Zalo: {item.zalo}
              </Typography>
            </Box>
          );
        })}
        <Button variant="contained">Gui lien he</Button>
      </Box>
    </Box>
  );
};

export default Contact;
