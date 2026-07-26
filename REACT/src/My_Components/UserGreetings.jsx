import PropTypes from 'prop-types';

// conditional rendering = allows you to control what gets rendered
//                        in your application based on certain conditions
//                        (show, hide, or change components)

function UserGreetings(props){
    if(props.isLoggedIn){
        return <h2 className="welcome-msg">Welcome {props.username}</h2>
    }
    else{
        return <h2 className="login-msg">Please log in to continue</h2>
    }
}

UserGreetings.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreetings