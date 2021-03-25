import React from "react";
import { AppBar, Container, Avatar, Toolbar, Typography } from "@material-ui/core";
import logo from "../../images/casino-1.svg";
import { makeStyles} from "@material-ui/core/styles";
import Login from "./Login/Login";
import User from "./User/User";

const useStyles = makeStyles((theme) => ({
    logo: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    }
}));
const Header = ({ username,
                    balance,
                    onChange,
                    onLogout }) => {
    const classes = useStyles();
    return (
        <header>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <Avatar src={logo} alt="Logo of Casino" className={classes.logo} />
                        <Typography variant="h6" className={classes.title}>Casino Game</Typography>
                        {username ?
                            <User
                                onLogout={onLogout}
                                balance={balance}
                            />
                            :
                            <Login
                                onChange={onChange}
                            />
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </header>
    )
};

export default Header;