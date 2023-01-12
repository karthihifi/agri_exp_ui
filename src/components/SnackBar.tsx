import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


interface MessageBarProps {
    openMsgBar: any;
    Message: String;
    handleopenMsgBar: () => void;
    handleCloseMsgBar: (event: React.SyntheticEvent | Event, reason?: string) => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MessageBar: React.FC<MessageBarProps> = (props) => {

    const action = (
        <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={props.handleCloseMsgBar}>
                UNDO
            </Button> */}
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={props.handleCloseMsgBar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
            <Snackbar
                open={props.openMsgBar}
                autoHideDuration={6000}
                onClose={props.handleCloseMsgBar}
            // message={props.Message}
            // action={action}
            >
                <Alert onClose={props.handleCloseMsgBar} severity="success" sx={{ width: '100%' }}>
                    {/* This is a success message! */}
                    {props.Message}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default MessageBar