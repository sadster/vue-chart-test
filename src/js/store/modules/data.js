import Axios from 'axios'

const state = {
    items: [],
    hasData: false,
}

const getters = {
    items: state => {
        return state.items
    },
    hasData: state => {
        return state.hasData
    },
}

const mutations = {
    SET_DATA: (state, payload) => {
        state.items = payload.items
        state.hasData = payload.has_data
    }
}

const actions = {
    getData: (context) => {
        Axios.get('https://test-task-for-frontend.herokuapp.com/data')
            .then(response => {
                context.commit('SET_DATA', response.data)
            })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
};
