import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({ dialogConfig}) {
  useEffect(() => {
    if (dialogConfig && dialogConfig.open && dialogConfig.open.callback) {
      dialogConfig.open.callback();
    }
  }, [dialogConfig]);

  const handleClose = () => {
    
    if (dialogConfig && dialogConfig.close && dialogConfig.close.callback) {
      dialogConfig.close.callback();
    }
  };

  const dialogueJSX = dialogConfig && (
    <Dialog
      disableEscapeKeyDown={
        (dialogConfig.close && dialogConfig.close.escDisabled) || false
      }
      disableBackdropClick={
        (dialogConfig.close && dialogConfig.close.backdropDisabled) || false
      }
      onClose={() => {
        handleClose();
      }}
      aria-labelledby="customized-dialog-title"
      open={true}
    >
      <DialogTitle
        id="customized-dialog-title"
        onClose={() => {
          handleClose();
        }}
      >
        {dialogConfig.title}
      </DialogTitle>
      <DialogContent dividers>{dialogConfig.contentJSX}</DialogContent>
      <DialogActions>
        {dialogConfig && dialogConfig.accept && (
          <Button
            autoFocus
            onClick={() => {
              if (dialogConfig.accept.callback) {
                dialogConfig.accept.callback(() => {
                  handleClose();
                });
              } else {
                handleClose();
              }
            }}
            color="primary"
          >
            {dialogConfig.accept.text}
          </Button>
        )}

        {dialogConfig && dialogConfig.reject && (
          <Button
            autoFocus
            onClick={() => {
              if (dialogConfig.reject.callback) {
                dialogConfig.reject.callback(() => {
                  handleClose();
                });
              } else {
                handleClose();
              }
            }}
            color="secondary"
          >
            {dialogConfig.reject.text}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );

  return <div>{dialogueJSX}</div>;
}
