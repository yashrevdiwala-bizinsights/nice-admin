import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

const db = {
  admin: {
    create: async (data) => {
      return await axios.post(`${API_URL}/new-user`, data)
    },
    login: async (data) => {
      return await axios.post(`${API_URL}/login-user`, data)
    },
    userProfile: async (data) => {
      return await axios.post(`${API_URL}/user-profile`, data)
    },
    updatePassword: async (data) => {
      return await axios.post(`${API_URL}/update-password`, data)
    },
  },
}

export default db
