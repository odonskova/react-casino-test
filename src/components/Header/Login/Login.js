import React from "react";
import { Box, Button, Dialog} from "@material-ui/core";
import LoginForm from "./LoginForm";

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }

    handleOpen = () => {
        this.setState({
            showModal: true
        })
    };

    handleClose = () => {
        this.setState({
            showModal: false
        })
    };


    render() {
        const {onChange} = this.props;
        return (
            <Box mr={3}>
                <Button color="inherit"
                        variant="outlined"
                        onClick={this.handleOpen}
                >Log in</Button>
                <Dialog open={this.state.showModal}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                >
                    <LoginForm onClose={this.handleClose}
                               onChange={onChange}
                    />
                </Dialog>
            </Box>

        )
    }
}