import classes from './User.module.css';
import {Component} from "react";

class User extends Component {
    /** Render is a specific method expected by React to render code to the screen */
    /** Because we extend from Component, we can access props with this keyword */
    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }

    componentWillUnmount() {
        console.log('user will unmount!');
    }
}

/** Functional component style */
// const User = (props) => {
//     return <li className={classes.user}>{props.name}</li>;
// };

export default User;
