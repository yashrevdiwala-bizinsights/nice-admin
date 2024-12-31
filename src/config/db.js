import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

const db = {
  admin: {
    create: async (data) => {
      return await axios.post(`${API_URL}/admin/new-user`, data)
    },
    login: async (data) => {
      return await axios.post(`${API_URL}/admin/login-user`, data)
    },
    userProfile: async (data) => {
      return await axios.post(`${API_URL}/admin/user-profile`, data)
    },
    updatePassword: async (data) => {
      return await axios.post(`${API_URL}/admin/update-password`, data)
    },
  },
  users: {
    createUser: async (data) => {
      return await axios.post(`${API_URL}/user/new-user`, data)
    },
    getUsers: async () => {
      return await axios.post(`${API_URL}/user/all-users`)
    },
    getUserProfile: async (userId) => {
      return await axios.post(`${API_URL}/user/user-profile`, { userId })
    },
    deleteUser: async (userId) => {
      return await axios.post(`${API_URL}/user/delete-user`, { userId })
    },
    updateUser: async (data) => {
      return await axios.post(`${API_URL}/user/update-user-profile`, data)
    },
    imageUpload: async (data) => {
      return await axios.post(`${API_URL}/user/image-upload`, data)
    },
    bulkUpload: async (data) => {
      return await axios.post(`${API_URL}/user/bulk-upload`, data)
    },
  },
}

export default db
