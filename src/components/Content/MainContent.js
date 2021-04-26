import React from "react";
import {
    Button,
    Container,
    Box,
    Dialog,
    DialogTitle,
    DialogContent
} from "@material-ui/core";
import Game from "./Game";
import ResultTable from "./ResultTable";


export default class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            gameResults: {
                slot_1: null,
                slot_2: null,
                slot_3: null
            },
            tableData: []
        }
    }

    handleOpen = () => {
        this.setState({
            showModal: true,
            gameResults: {
                slot_1: null,
                slot_2: null,
                slot_3: null
            },
        });
        this.props.changeBalance();
    };

    handleClose = () => {
        this.setState({
            showModal: false
        })
    };

    getTimeOfTry = () => {
        const date = new Date();
        const resultDay = [date.getDay(), date.getMonth()].map(function (x) {
            return x < 10 ? "0" + x : x
        }).join(".");
        const result = [date.getHours(), date.getMinutes(), date.getSeconds()].map(function (x) {
            return x < 10 ? "0" + x : x
        }).join(":");
        return `${resultDay} ${result}`
    };

    getRandomNumber = (slot) => {
        if (slot === "slot_1") {
            this.setState({
                gameResults: {
                    slot_1: Math.floor(1 + Math.random() * (9 + 1 - 1)),
                    slot_2: Math.floor(1 + Math.random() * (9 + 1 - 1)),
                    slot_3: Math.floor(1 + Math.random() * (9 + 1 - 1))
                }
            }, () => {
                this.checkCombination();
                this.props.checkWinningCombinations(this.state.gameResults)
            });

        }
        if (slot === "slot_2") {
            this.setState({
                gameResults: {
                    slot_1: 7,
                    slot_2: 7,
                    slot_3: 7
                }
            }, () => {
                this.checkCombination();
                this.props.checkWinningCombinations(this.state.gameResults)
            });

        }
        if (slot === "slot_3") {
            this.handleClose();
        }

    };

    checkCombination = () => {
        this.setState(prevState => ({
            tableData: [
                ...prevState.tableData,
                {
                    id: new Date().getTime(),
                    ...this.state.gameResults,
                    time: this.getTimeOfTry()
                }
            ]
        }), () => {
            localStorage.setItem("tableOfResults", JSON.stringify(this.state.tableData))
        });
    };
    render() {

        return (
            <main>
                <Container fixed style={{
                    marginTop: "80px",
                }}>
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper" >
                        <Box p={1}>
                            <Button variant="contained"
                                    color="primary"
                                    disabled={this.props.balance < 1}
                                    onClick={this.handleOpen}
                            >Play the game</Button>
                            <Dialog open={this.state.showModal}
                                    onClose={this.handleClose}
                                    aria-labelledby="form-dialog-title"
                                    maxWidth="xl"
                            >
                                <DialogTitle id="form-dialog-title">
                                    Good Luck!
                                </DialogTitle>
                                <DialogContent style={{display: "flex"}}>
                                    <Game
                                        getRandomNumber={this.getRandomNumber}
                                        gameResults={this.state.gameResults}
                                        changeBalance={this.props.changeBalance}
                                    />
                                </DialogContent>
                            </Dialog>
              </Box>
                    </Box>
                    <ResultTable tableData={this.state.tableData}/>
                </Container>
            </main>
        )
    }
}