import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        minHeight: 100,
        marginRight: 10
    },
    title: {
        fontSize: 14,
    },
    result: {
        fontSize: 24,
        textAlign: "center"
    }
});

export default function Game({changeBalance, getRandomNumber, gameResults}) {
    const classes = useStyles();
    return (
        <>
            {Object.keys(gameResults).map((item, index) => {
                return (
                    <div key={index}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {item.replace("_", " ").toUpperCase()}
                                </Typography>

                                <Typography variant="body2" component="h1" className={classes.result}>
                                    {gameResults[item]}
                                </Typography>
                            </CardContent>

                        </Card>
                        <CardActions>
                            <Button variant="contained"
                                    onClick={() =>{
                                        getRandomNumber(item);
                                        changeBalance();
                                    }}
                                    >Play</Button>
                        </CardActions>
                    </div>
                )
            })}
        </>
    );
}