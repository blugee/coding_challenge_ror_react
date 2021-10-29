import React, { Component } from "react";
import "./index.css";
import { withRouter } from "react-router-dom";
import { NotificationError } from "../../utils/Notification";


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
            },
            formErrors: {}
        };
    }


    formValid = (formErrors, rest) => {
        let valid = true;
        Object.values(formErrors).forEach(val => {
            val.length > 0 && (valid = false);
        });
        Object.values(rest).forEach(val => {
            val === null && (valid = false);
        });
        return valid;
    };

    handleClick = () => {
        this.props.history.push("/login");
    };

    handleSubmit = async e => {
        e.preventDefault()
        let isValid = await this.formValid(this.state.formErrors, this.state.data)
        if (isValid) {
            console.log(this.state.data)
           
        } else{
            NotificationError('Please Provide Mandatory value')
        }
    }

    onChange = (name, event,) => {
        let value = event.target.value;
        let data = this.state.data;
        let formErrors = this.state.formErrors;

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;

            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;

            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;

            case "password":
                formErrors.password =
                    value.length < 4 ? "minimum 4 characaters required" : "";
                break;
            default:
                break;
        }
        data[name] = value;
        this.setState({ formErrors, data: data });
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">

                    <h1>Create Account</h1>

                    <form onSubmit={this.handleSubmit} noValidate >

                        {/* FirstName */}
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                className={formErrors.firstName && formErrors.firstName.length > 0 ? "error" : null}
                                placeholder="First Name"
                                type="text"
                                name="firstName"
                                noValidate
                                onChange={(e) => this.onChange('firstName', e)}
                            />

                            {formErrors.firstName && formErrors.firstName.length > 0 && (
                                <span className="errorMessage">{formErrors.firstName}</span>
                            )}

                        </div>

                        {/* LastName */}
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                className={formErrors.lastName && formErrors.lastName.length > 0 ? "error" : null}
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                noValidate
                                onChange={(e) => this.onChange('lastName', e)}
                               
                            />
                            {formErrors.lastName && formErrors.lastName.length > 0 && (
                                <span className="errorMessage">{formErrors.lastName}</span>
                            )}
                        </div>

                        {/* Email */}
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                className={formErrors.email && formErrors.email.length > 0 ? "error" : null}
                                placeholder="Email"
                                type="email"
                                name="email"
                                noValidate
                                onChange={(e) => this.onChange('email', e)}
                            />
                            {formErrors.email && formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>

                        {/* Password */}
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                className={formErrors.password && formErrors.password.length > 0 ? "error" : null}
                                placeholder="Password"
                                type="password"
                                name="password"
                                noValidate
                                onChange={(e) => this.onChange('password', e)}
                            />
                            {formErrors.password && formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>

                        {/* Submit  */}
                        <div className="createAccount">
                            <button type="submit" >Create Account</button>
                        </div>

                    </form>

                    <div className="createAccount">
                        <button type="login" onClick={() => { this.handleClick() }} >Login</button>
                        <b><small>Already Have an Account?</small></b>
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Registration);