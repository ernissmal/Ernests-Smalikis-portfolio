import axios from 'axios';

const state = {
  projects: [],
  project: null,
};

const mutations = {
  SET_PROJECTS(state, projects) {
    state.projects = projects;
  },
  SET_PROJECT(state, project) {
    state.project = project;
  },
};

const actions = {
  async fetchProjects({ commit }) {
    try {
      const response = await axios.get('/api/projects');
      commit('SET_PROJECTS', response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  },
  async fetchProject({ commit }, projectId) {
    try {
      const response = await axios.get(`/api/projects/${projectId}`);
      commit('SET_PROJECT', response.data);
    } catch (error) {
      console.error('Error fetching project:', error);
    }
  },
  async createProject({ dispatch }, projectData) {
    try {
      await axios.post('/api/projects', projectData);
      dispatch('fetchProjects');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  },
  async updateProject({ dispatch }, { projectId, projectData }) {
    try {
      await axios.put(`/api/projects/${projectId}`, projectData);
      dispatch('fetchProject', projectId);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  },
  async deleteProject({ dispatch }, projectId) {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      dispatch('fetchProjects');
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  },
};

const getters = {
  projects: (state) => state.projects,
  project: (state) => state.project,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
