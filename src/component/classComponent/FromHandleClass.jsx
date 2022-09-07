import React from 'react'

class FromHandleClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            fristName : 'Hello',
            lastName : '',
            number : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    fristNameHandle = (e) => {
        this.setState ({
            fristName : this.state.e.terget.value
        })

        console.log(this.fristName)
    }

    lastNameHandle = (e) => {
        this.setState ({
            lastName : e.terget.value
        })

        console.log(this.lastName)
    }

    numberHandle = (e) => {
        this.setState ({
            number : e.terget.value
        })

        console.log(this.number)
    }

    emailHandle = (e) => {
        this.setState ({
            email : e.terget.value
        })

        console.log(this.email)
    }

    passwordHandle = (e) => {
        this.setState ({
            password : e.terget.value
        })

        console.log(this.password)
    }

    confirmPasswordHandle = (e) => {
        this.setState ({
            confirmPassword : e.terget.value
        })

        console.log(this.confirmPassword)
    }

    render(){
        return(
            <div>
                <from onSubmit = {this.onSubmitHandle}>
                    <input type = 'text' placeholder='frist name' name = 'fristName' id='fristName' value={this.fristName} onChange={this.fristNameHandle} /> <br />
                    <input type = 'text' placeholder='last name' name = 'lastName' id='lastName'value={this.lastName} onChange={this.lastNameHandle}/> <br />
                    <input type = 'number' placeholder='number' name = 'number' id='number' value={this.number} onChange={this.numberHandle}/> <br />
                    <input type = 'email' placeholder='email' name = 'email' id='email' value={this.email} onChange={this.emailHandle}/> <br />
                    <input type = 'password' placeholder='password' name = 'password' id='password' value={this.password} onChange={this.passwordHandle}/> <br />
                    <input type = 'password' placeholder='confirm password' name = 'confirmPassword' id='confirmPassword' value={this.confirmPassword} onChange={this.confirmPasswordHandle}/> <br />
                    <button> Submit Now </button>
                </from>
            </div>
        )
    }
}

export default FromHandleClass;