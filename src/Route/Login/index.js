import React, { Component } from "react";
import "./index.css";
import { withRouter } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

class Login extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);

        this.state = {
            data: {

                email: null,
                password: null,
            },
        };
    }

    onChange = (name, event, test) => {
        let data = this.state.data;
        data[name] = event.target.value;
        this.setState({
            data: data,
        });
    };

    handleClick = (e) => {
        e.preventDefault()
        let data = this.state.data
        let loggedUser = ''
        // var storeuserData = localStorage.getItem('users')
        // if (!storeuserData) {
        //     return;
        // }
        // var allusersEntri = JSON.parse(storeuserData);
        // var isRegistredUser = false

        // for (var i = 0; i < allusersEntri.length; i++) {
        //     var usersEntry = allusersEntri[i];

        //     var storeuseremail = usersEntry.email;
        //     var storePassWord = usersEntry.password;

        //     if (data.email === storeuseremail && data.password === storePassWord) {
        //         loggedUser = usersEntry
        //         isRegistredUser = true
        //     }
        // }

        // if (isRegistredUser) {
            this.context.login();
            this.props.history.push("/dashboard");
        // }
        // else {
        //     alert('user is not register')
        // }
    }

    handlePageChange =()=>{
        this.props.history.push("/registration");
    }

    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">

                    <h1>Login</h1>

                    <form>

                        {/* Email */}
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={(e) => this.onChange('email', e)}
                            />
                        </div>


                        {/* Password */}
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={(e) => this.onChange('password', e)}
                            />


                        </div>
                        {/* Submit  */}
                        <div className="createAccount">
                            <button type="login" onClick={(e) => { this.handleClick(e); }} >Login</button><br />
                            <b><big>New user?</big></b> <button onClick={this.handlePageChange} className='signupLink'>Create a New Account</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default withRouter(Login);   