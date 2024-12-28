import axios from 'axios';

const state = {
  user: null,
  users: [],
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_USERS(state, users) {
    state.users = users;
  },
};

const actions = {
  async fetchUser({ commit }, userId) {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      commit('SET_USER', response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  },
  async fetchUsers({ commit }) {
    try {
      const response = await axios.get('/api/users');
      commit('SET_USERS', response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
  async createUser({ dispatch }, userData) {
    try {
      await axios.post('/api/users', userData);
      dispatch('fetchUsers');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  },
  async updateUser({ dispatch }, { userId, userData }) {
    try {
      await axios.put(`/api/users/${userId}`, userData);
      dispatch('fetchUser', userId);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  },
  async deleteUser({ dispatch }, userId) {
    try {
      await axios.delete(`/api/users/${userId}`);
      dispatch('fetchUsers');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  },
};

const getters = {
  user: (state) => state.user,
  users: (state) => state.users,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
