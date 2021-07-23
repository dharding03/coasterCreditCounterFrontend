import React, {Component} from "react";

class PageHider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthorized: false,
            role: ""
        };
        this.checkAuto = this.checkAuto.bind(this);
        this.authorization = this.authorization.bind(this);
    }

    checkAuto(e) {
        console.log(e.target.value)
        switch (e.target.value) {
            case "admin":
                this.setState({isAuthorized: true, role: "admin"});
                break;
            case "user":
                this.setState({isAuthorized: true, role: "user"});
                break;
            default:
                this.setState({isAuthorized: false, role: ""});
        }
    }

    authorization() {
        console.log(this.state.isAuthorized, this.state.role)
        if (this.state.isAuthorized && this.state.role === "admin")
            return <div className="admin">This is Admin</div>

        if (this.state.isAuthorized && this.state.role === "user")
            return <div className="user">This is user</div>
        else
            return <div className="notuser">Not Authorized</div>

    }

    render() {
        return (
            <div>
                <label> Simulate authorization:
                    <input type= "text" onChange={this.checkAuto}/>
                </label>
            </div>
        )

    }
}

export default PageHider;