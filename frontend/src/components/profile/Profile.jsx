const Profile = ({ user }) => {
  return (
    <div>
      <h3>User Profile</h3>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
