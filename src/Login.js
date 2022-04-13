import { Component } from "react";

class FluidInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            value: ""
        };
    }
    focusField() {
        const { focused } = this.state;
        this.setState({
            focused: !focused
        });
    }
    handleChange(event) {
        const { target } = event;
        const { value } = target;
        this.setState({
            value: value
        });
        this.props.setValue()
    }
    render() {
        const { type, label, style, id } = this.props;
        const { focused, value } = this.state;

        let inputClass = "fluid-input";
        if (focused) {
            inputClass += " fluid-input--focus";
        } else if (value != "") {
            inputClass += " fluid-input--open";
        }

        return (
            <div className={inputClass} style={style}>
                <div className="fluid-input-holder">

                    <input
                        className="fluid-input-input"
                        type={type}
                        id={id}
                        onFocus={this.focusField.bind(this)}
                        onBlur={this.focusField.bind(this)}
                        onChange={this.handleChange.bind(this)}
                        autocomplete="off"
                    />
                    <label className="fluid-input-label" forHtml={id}>{label}</label>

                </div>
            </div>
        );
    }
}

class Button extends Component {
    render() {
        return (
            <div className={`button ${this.props.buttonClass}`} onClick={this.props.onClick}>
                {this.props.buttonText}
            </div>
        );
    }
}

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.login = this.login.bind(this);
    }

    setEmail(email) {
        this.setState({ email: email })
    }

    setPassword(password) {
        this.setState({ password: password })
    }

    verifyLogin(email, password) {
        return true
    }

    login() {
        let email = this.state.email
        let password = this.state.password
        if (this.verifyLogin(email, password)) {
            this.props.setLogin(email)
        }
    }

    render() {
        const style = {
            margin: "15px 0"
        };
        return (
            <div className="login-container">
                <div className="title">
                    {this.props.name}
                </div>
                <FluidInput type="text" label="email" id="name" style={style} setValue={this.setEmail} />
                <FluidInput type="password" label="password" id="password" style={style} setValue={this.setPassword} />
                <Button buttonText="log in" buttonClass="login-button" onClick={this.login} />
            </div>
        );
    }
}

export default LoginContainer