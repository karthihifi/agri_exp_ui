import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "@mui/material/Link";
import readXlsxFile from "read-excel-file";
import { FormattedMessage } from "react-intl";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface MassUploadProps {
  MaassUplModalopen: boolean;
  handleMassUplModalOpen: () => void;
  handleMassUplModalClose: () => void;
}

const MassUploadModal: React.FC<MassUploadProps> = (props) => {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.MaassUplModalopen}
        onClose={props.handleMassUplModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.MaassUplModalopen}>
          <Box sx={style}>
            <Stack spacing={2}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {/* Mass Upload Data */}
                <FormattedMessage id="MassUpl.Header"></FormattedMessage>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 4 }}>
                <FormattedMessage id="MassUpl.body"></FormattedMessage>
                {/* Upload Data in the Below Specified Excel format.
                                Click <Link>here</Link> to download the format. */}
              </Typography>
              <Button variant="contained" component="label">
                <FormattedMessage id="btn.Upload"></FormattedMessage>
                <input
                  hidden
                  accept=".xlsx"
                  multiple
                  type="file"
                  onChange={(eve) => {
                    console.log(eve.target.files);
                    let files: any = eve.target.files;
                    let filedata: any[] = [];
                    readXlsxFile(files[0]).then((rows) => {
                      console.log(rows, JSON.stringify(rows));
                      filedata.push(JSON.stringify(rows));
                    });
                    props.handleMassUplModalClose();
                  }}
                />
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default MassUploadModal;
