import { Stack } from "@mui/material";
import QRCode from "react-qr-code";

export const QrCode = () => (
   <div
      style={{
         height: "calc(100vh - 68.5px)",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
      }}
   >
      <Stack direction="column" justifyContent="center" alignItems="center">
         <QRCode value={"Phonepe"} />
      </Stack>
   </div>
);
