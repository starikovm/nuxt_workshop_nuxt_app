import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    wholeList: [],
    currentList: [],
    budget: 0,
    currentItem: {}
};

const mutations = {
    listLoaded (state, list) {
        state.wholeList = list;
        state.currentList = list;
    },
    updateCurrentList(state, currentList) {
        state.currentList = currentList;
    },
    updateBudget(state, budget) {
        state.budget = budget;
    },
    setCurrentItem(state, item) {
        state.currentItem = item;
    }
};

const actions = {
    loadList ({ commit }) {
        fetch('/list.json')
            .then(response => response.json())
            .then(response => {
                // @TODO 2 - commit data from json to store
            });
    },
    userBudgetUpdated({ commit, state: { wholeList }}, newBudget) {
        // @TODO 5 - store new current budget and update show list
    }
};

const store = () =>
    new Vuex.Store({
        state,
        actions,
        mutations
    });

export default store;