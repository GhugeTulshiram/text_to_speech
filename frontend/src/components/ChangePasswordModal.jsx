import { useState } from "react";
import { changePassword } from "../services/profileService.js";
import "../pages/Profile.css";

const ChangePasswordModal = ({ onClose }) => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleSubmit = async () => {
    await changePassword(form);
    alert("Password updated");
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Change Password</h3>

        <input
          type="password"
          placeholder="Current Password"
          onChange={(e) =>
            setForm({ ...form, currentPassword: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="New Password"
          onChange={(e) => setForm({ ...form, newPassword: e.target.value })}
        />

        <button onClick={handleSubmit} className="primary-btn">
          Update Password
        </button>

        <button onClick={onClose} className="secondary-btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
