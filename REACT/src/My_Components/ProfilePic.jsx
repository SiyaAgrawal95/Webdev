function ProfilePic(){
    const imageUrl = './src/assets/Profile.jpeg';

    const handleClick = () => console.log("OUCH");
    return(<img onClick = {handleClick} src={imageUrl}></img>);
}
export default ProfilePic