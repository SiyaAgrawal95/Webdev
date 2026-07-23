import propTypes from 'prop-types'

function Student(props){

    return(
        <div className ="Student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// propTypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//
//             age: PropTypes.number


Student.propTypes = {
    name : propTypes.string,
    age : propTypes.number,
    isStudent : propTypes.bool,
}


export default Student