import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/profileService";
import api from "../services/api";
import "./Profile.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await getProfile();
      setProfile(res.data);
    } catch (err) {
      console.error("Failed to load profile", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await updateProfile(profile);
      setEdit(false);
      fetchProfile();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  /* ======================
     PROFILE COMPLETION %
  ====================== */
  const getCompletion = () => {
    const fields = [
      profile?.name,
      profile?.email,
      profile?.gender,
      profile?.country,
      profile?.language,
      profile?.timezone,
    ];

    const filled = fields.filter((f) => f && f.trim() !== "").length;
    return Math.round((filled / fields.length) * 100);
  };

  /* ======================
     DELETE ACCOUNT
  ====================== */
  const deleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure? This action cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      await api.delete("/profile");
      localStorage.removeItem("token");
      alert("Account deleted successfully");
      window.location.href = "/login";
    } catch (err) {
      alert("Failed to delete account");
    }
  };

  if (loading) return <p className="loading-text">Loading...</p>;
  if (!profile) return <p className="error-text">Profile not found</p>;

  const completion = getCompletion();

  return (
    <div className="profile-wrapper fade-in">
      <div className="profile-card">
        {/* HEADER */}
        <div className="profile-header">
          <div>
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
          </div>

          <button onClick={() => setEdit(!edit)} className="edit-btn">
            {edit ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* PROFILE COMPLETION */}
        <div className="profile-progress">
          <span>Profile Completion: {completion}%</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>

        {/* FORM */}
        <div className="profile-form">
          <div className="field">
            <label>Full Name</label>
            <input
              name="name"
              value={profile.name || ""}
              disabled={!edit}
              onChange={handleChange}
            />
          </div>

          {/* EMAIL (READ ONLY) */}
          <div className="field">
            <label>Email (Gmail)</label>
            <input value={profile.email || ""} disabled />
          </div>

          <div className="field">
            <label>Gender</label>
            <select
              name="gender"
              value={profile.gender || ""}
              disabled={!edit}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="field">
            <label>Country</label>
            <input
              name="country"
              value={profile.country || ""}
              disabled={!edit}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Language</label>
            <input
              name="language"
              value={profile.language || ""}
              disabled={!edit}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Time Zone</label>
            <input
              name="timezone"
              value={profile.timezone || ""}
              disabled={!edit}
              onChange={handleChange}
            />
          </div>

          {edit && (
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>

        {/* DELETE ACCOUNT */}
        <div className="danger-zone">
          <h4>Danger Zone</h4>
          <button className="delete-btn" onClick={deleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
