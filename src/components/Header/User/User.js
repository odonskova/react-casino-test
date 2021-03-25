import React from "react";
import {Avatar, Box, Button, Typography} from "@material-ui/core";

 const User = ({onLogout, balance}) => {
        return (
            <>
                <Box mr={3}>
                    <Typography variant="h6">${parseFloat(balance).toFixed(2)}</Typography>
                </Box>
                <Box mr={3}>
                    <Avatar src="" alt="userLogo" />
                </Box>
                <Box mr={3}>
                    <Button variant="contained" color="secondary" onClick={onLogout}>Log out</Button>
                </Box>
            </>
        )
};

export default User