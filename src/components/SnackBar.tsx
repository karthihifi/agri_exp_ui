import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


interface MessageBarProps {
    openMsgBar: any;
    handleopenMsgBar: () => void;
    handleCloseMsgBar: () => void;
}

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
                message="Note archived"
                action={action}
            />
        </div>
    );
}

export default MessageBar