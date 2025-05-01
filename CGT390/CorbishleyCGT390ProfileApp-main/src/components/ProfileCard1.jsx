import ReginaProfile from './../assets/regina.jpg'

const ProfileCard1 = () => {
    const Name = "Regina George";
    const Email = "regina@gmail.com"
    const Role = "Mean Girl 1";
    return (
        <div className="profileCard" style={ProfileCardStyle.body}>
            <div className = "profileImgContainer" style={ProfileCardStyle.profileImgContainer}>
                <img src={ReginaProfile} alt={Name} style={ProfileCardStyle.profileImg}/>
            </div>
            <div className = "profileInfoContainer">
                <h2 style={ProfileCardStyle.name}>{Name}</h2>
                <p>{Role} <br></br> {Email}</p>
            </div>
            
         </div>
    );
}

export default ProfileCard1;

const ProfileCardStyle = {
    body: {
        backgroundColor: 'lightpink',
        padding: '25px',
        width: '200px',
        paddingBottom: '10px',
        borderRadius: '25px',
        marginRight: '50px',

    },
    profileImg: {
        width: '200px',
    },
    name: {
        color: 'black',
        position: 'relative',
    }
}