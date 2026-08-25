import api from "./api";

/* ======================
   GET PROFILE
====================== */
export const getProfile = async () => {
  return api.get("/profile");
};

/* ======================
   UPDATE PROFILE
====================== */
export const updateProfile = async (formData) => {
  return api.put("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/* ======================
   CHANGE PASSWORD
====================== */
export const changePassword = async (data) => {
  return api.put("/profile/change-password", data);
};

/* ======================
   GET HISTORY ✅ FIX
====================== */
export const getHistory = async () => {
  return api.get("/profile/history");
};
