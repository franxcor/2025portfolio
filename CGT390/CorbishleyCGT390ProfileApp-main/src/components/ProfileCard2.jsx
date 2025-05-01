import CadyProfile from './../assets/cady.jpg'

const ProfileCard2 = () => {
    const Name = "Cady Heron";
    const Email = "Cady@gmail.com"
    const Role = "Mean Girl 2";
    return (
        <div className="profileCard" style={ProfileCardStyle.body}>
            <div className = "profileImgContainer" >
                <img src={CadyProfile} alt={Name} style={ProfileCardStyle.profileImg}/>
            </div>
            <div className = "profileInfoContainer">
                <h2>{Name}</h2>
                <p>{Role} <br></br> {Email}</p>
            </div>
            
         </div>
    );
}

export default ProfileCard2;

const ProfileCardStyle = {
    body: {
        backgroundColor: 'lightpink',
        padding: '25px',
        width: '200px',
        paddingBottom: '10px',
        borderRadius: '25px',
    },
    profileImg: {
        width: '200px',
    },
    name: {
        color: 'black',
        position: 'relative',
    }
}