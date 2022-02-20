class App extends React.Component {
    constructor(props) {
        super(props);
        this.tempArr = new Array(9);
        this.tempArr.fill("");

        this.state = {
            arr: this.tempArr,
            xround: true,
            win: false,
        };
    }

    handleReset = () => {
        window.location.reload();
    };
    

    handleUpdate = (ind, xround) => {
        if (this.state.win) return;
        const tempSt = [...this.state.arr];        

        if (xround) tempSt[ind] = "O";
        else tempSt[ind] = "X";        

        // callback form of setstate 
        this.setState(
            {
                arr: tempSt,
                xround: xround,
            },
            () => {
                const winner = this.checkResult(this.state.xround);
                if (winner) {
                    this.setState(
                        {
                            win: true,
                        },
                        () => alert(winner)
                    );
                }
            }
        );
    };

    checkResult = (xround) => {
        const winner = xround ? "O win" : "X win";
        const { arr } = this.state;    
        let {win}   = this.state;
        if (
            arr[0] &&
            ((arr[0] === arr[1] && arr[1] === arr[2]) ||
                (arr[0] === arr[4] && arr[4] === arr[8]) ||
                (arr[0] === arr[3] && arr[3] === arr[6]))
        ) {
            console.log("1", winner);
            win = true;
            return winner;
        }

        if (arr[1] && arr[1] === arr[4] && arr[4] === arr[7]) {
            console.log("2", winner);
            win = true;
            return winner;
        }

        if (
            arr[2] &&
            ((arr[2] === arr[5] && arr[5] === arr[8]) ||
                (arr[2] === arr[4] && arr[4] === arr[6]))
        ) {
            console.log("3", winner);
            win = true;
            return winner;
        }

        if (arr[3] && arr[3] === arr[4] && arr[4] === arr[5]) {
            console.log("4", winner);
            win = true;
            return winner;
        }
        if (arr[6] && arr[6] === arr[7] && arr[7] === arr[8]) {
            console.log("5", winner);
            win = true;
            return winner;
        }

        return 0;
    };

    render() {
        const { arr, xround } = this.state;
        const round = xround ? "X round" : "O Round";        
        return (
            <div className="game--container">
                <h2>Tic Tac Toe</h2>
                <div className="game--header">
                    <p>{round}</p>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
                <div className="game--grid--container">
                    {arr.map((val, ind) => (
                        <Box
                            value={val}
                            key={ind}
                            index={ind}
                            update={this.handleUpdate}
                            xround={xround}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
