import ProfilePic from '../assets/Profile.jpeg'
function Card(){
    return(
        <div className = "card">
            <img className="card-image" src={ProfilePic} alt="Profile picture"></img>
            <h2 className="card-title" >Siya Agrawal</h2>
            <p className="card-text" >I like eating ramen.</p>
        </div>
    );
}

export default Card