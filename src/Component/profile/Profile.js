import React from 'react'
import PropTypes from 'prop-types';
import '../../App.css';

const Profile = ({fullName, bio, profession, children, handleName}) => {


  return (

    <div>

      <div >
        <h1> {fullName} </h1>
        <h2> {bio} </h2>
        <h3>{profession} </h3>
      </div>

        {children}
        <button  className="btn butt" onClick={() => handleName(fullName)}>
        ClickMe
   </button>
        </div>
        
  );
}

Profile.defaultProps = {
  fullName: 'Stranger',
  bio:"No idea",
  profession: "Unkown",
  handleName: ()=> alert("Check Your code")
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile