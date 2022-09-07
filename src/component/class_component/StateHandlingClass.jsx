import React from 'react' 

class StateHandlingClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    HandleDic = () => {
        this.setState ({
            count: this.state.count - 1
        })
    }

    HandleInc = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1> count : {this.state.count}</h1>
                <button onClick = {this.HandleDic}> - </button>
                <button onClick = {this.HandleInc}> + </button>
            </div>
        )
    }
}

export default StateHandlingClass;