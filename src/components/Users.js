import {Component, useState} from 'react';
import User from './User';

import classes from './Users.module.css';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class Users extends Component {

    /** Used to define state */
    /** It should mandatory have an object named state */
    constructor() {
        super();
        this.state = {
            showUsers: true
        };
    }

    toggleUsersHandler() {
        // this.state.showUsers = false !NOT
        this.setState((curState) => {
            return {showUsers: !curState.showUsers}
        });
    }

    /** Lifecycle component functions */

    /** Called once component mounted (was evaluated and rendered) -> used instead of useEffect withouth dependencies ([]) on functional components */
    componentDidMount() {
    }

    /** Called once component updated, something changed (like the state) and the component was re-rendered
     * -> used instead of useEffect with dependencies ([someValue]) */
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.users.length === 0) {
            throw new Error('No users provided!');
        }
    }

    /** Called before component is removed from the DOM -> used instead of cleanup useEffect( useEffect(()=> {return ()=> {...}}, [])  */
    componentWillUnmount() {
    }


    render() {
        const usersList = (
            // <ul>
            //   {DUMMY_USERS.map((user) => (
            //       <User key={user.id} name={user.name}/>
            //   ))}
            // </ul>
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name}/>
                ))}
            </ul>
        );

        /** We should bind(this) so that the this from inside the function have now the same context/value as the one from bind */
        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        );
    }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);
//
//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };
//
//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );
//
//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
