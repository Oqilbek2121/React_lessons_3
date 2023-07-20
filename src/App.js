import React from "react";

class App extends React.Component {

    state = {
        second: 0,
        minute: 0,
        hour: 0,
        btnDisabled: false,
        interval: "",
        intervalstroge: [],
    };

    start = () => {
        this.setState({
            btnDisabled: true,
        })
        let timer = setInterval(() => {
            const { second, minute, hour } = this.state;
            if (second === 59) {
                if (minute === 59) {
                    this.state({
                        second: 0,
                        minute: 0,
                        hour: hour + 1,
                    });
                } else {
                    this.state({
                        second: 0,
                        minute: minute + 1,
                    });
                }
            } else {
                this.state({
                    second: second + 1,
                });
            }
            this.setState({
                second: second + 1,
            });
        }, 1000);
        this.setState({
            interval: timer,
        });
    };

    stop = () => {
        clearInterval(this.state.interval);
        this.setState({
            btnDisabled: false,
        })
    }

    interval = () => {
        const { second, minute, hour, intervalstroge } = this.state;
        intervalstroge.push(`${hour}:${minute}:${second}`);
        this.setState({
            intervalstroge,
        });
    };

    clear = () => {
        this.stopClicked();
        this.setState({
            second: 0,
            minute: 0,
            hour: 0,
            intervalstroge: [],
        });
    };



    render() {
        const { second, minute, hour, btnDisabled, intervalstroge} = this.state;
            return (
                <div>
                    <div className="containers">
                        <div className="clock">
                            <span id="hour">{hour}</span>
                            <span>:</span>
                            <span id="min">{minute}</span>
                            <span>:</span>
                            <span id="sec">{second}</span>
                        </div>
                        <div className="clock-btn"></div>
                    </div>

                    <div className="containers_btn">
                        <div className="start_btn">
                            <button type="button" 
                            class="btn btn-success" 
                            onClick={this.start} 
                            disabled={btnDisabled}>
                                Start
                            </button>
                        </div>
                        <div className="stop_btn">
                            <button type="button" class="btn btn-danger" onClick={this.stop}>Stop</button>
                        </div>
                        <div className="interval_btn">
                            <button type="button" class="btn btn-secondary" disabled={!btnDisabled}>Interval</button>
                        </div>
                        <div className="clear_btn">
                            <button type="button" class="btn btn-warning" onClick={this.clear}>Clear</button>
                        </div>
                    </div>

                    <div className="containers_interval">
                        {intervalstroge.map((item, index) => <p>{index+1}.=&gt; {item}</p>)}
                    </div>
                </div>
            );
        };
    };

export default App;