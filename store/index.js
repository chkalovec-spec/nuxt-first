export const store = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state, token) {
    state.token = null;
  }
};

export const actions = {
  login({ commit }) {
    commit("setToken", "token");
  },
  logout({ commit }) {
    commit("clearToken");
  }
};

export const getters = {
  hasToken: state => !!state.token
};
