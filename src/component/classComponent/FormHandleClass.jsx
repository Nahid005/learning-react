import React from 'react'

class FormHandleClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fristName : '',
            lastName : '',
            number : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    fristNameHandle = (e) => {
        this.setState ({
            fristName : e.target.value
        })
    }

    lastNameHandle = (e) => {
        this.setState ({
            lastName : e.target.value
        })
    }

    numberHandle = (e) => {
        this.setState ({
            number : e.target.value
        })
    }

    emailHandle = (e) => {
        this.setState ({
            email : e.target.value
        })
    }

    passwordHandle = (e) => {
        this.setState ({
            password : e.target.value
        })
    }

    confirmPasswordHandle = (e) => {
        this.setState ({
            confirmPassword : e.target.value
        })
    }

    onSubmitHandle = (e) => {
        e.preventDefault();
        const {fristName, lastName, number, email, password, confirmPassword} = this.state
        const userInformation = {
            fristName,
            lastName,
            number,
            email,
            password,
            confirmPassword
        }
        console.log(userInformation)
    }

    render(){
        return(
            <div>
                <form onSubmit = {this.onSubmitHandle}>
                    <input type = 'text' placeholder='frist name' name = 'fristName' id='fristName' value={this.state.fristName} onChange={this.fristNameHandle} /> <br />
                    <input type = 'text' placeholder='last name' name = 'lastName' id='lastName'value={this.state.lastName} onChange={this.lastNameHandle}/> <br />
                    <input type = 'number' placeholder='number' name = 'number' id='number' value={this.state.number} onChange={this.numberHandle}/> <br />
                    <input type = 'email' placeholder='email' name = 'email' id='email' value={this.state.email} onChange={this.emailHandle}/> <br />
                    <input type = 'password' placeholder='password' name = 'password' id='password' value={this.state.password} onChange={this.passwordHandle}/> <br />
                    <input type = 'password' placeholder='confirm password' name = 'confirmPassword' id='confirmPassword' value={this.state.confirmPassword} onChange={this.confirmPasswordHandle}/> <br />
                    <button> Submit Now </button>
                </form>
            </div>
        )
    }
}

export default FormHandleClass;