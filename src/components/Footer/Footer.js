import React from "react";
import {makeStyles, Typography, BottomNavigation, Toolbar} from "@material-ui/core";
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles({
    footerContainer: {
        textAlign: "center",
        width: "100%",
        height: 100,
        position: 'fixed',
        bottom: 0,
        backgroundColor: "#3f51b5"
    },
    copyRights: {
        color: "#ffffff",
    }
});
const Footer = () => {
    const classes = useStyles();
    return (
        <footer>
            <BottomNavigation className={classes.footerContainer} showLabels={false}>
                    <Toolbar>
                        <CopyrightIcon className={classes.copyRights}/>
                        <Typography variant="body1" className={classes.copyRights}>
                            &nbsp; 2021 Donskova Olga
                        </Typography>
                    </Toolbar>
            </BottomNavigation>
        </footer>
    );
};

export default Footer;