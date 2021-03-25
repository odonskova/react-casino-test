import React from "react";
import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";

export default class LoginForm extends React.Component {
    render() {
        return (
            <>
                <DialogTitle id="form-dialog-title">
                    Log In
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter your name to start the Game!</DialogContentText>
                    <TextField
                        autoFocus
                        fullWidth
                        margin="dense"
                        id="name"
                        label="Username"
                        type="text"
                        name="username"
                        onChange={(event) => this.props.onChange(event)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary">Cancel</Button>
                </DialogActions>
            </>

        )
    }
}