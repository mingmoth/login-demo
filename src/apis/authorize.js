import { apiHelper } from "../utils/api";

export default {
  signin({ email, password }) {
    return apiHelper.post('/signin', { email, password })
  },
  getCurrentUser() {
    return apiHelper.get('/currentUser')
  }
}