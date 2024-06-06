import { createStore } from "vuex";

const store = createStore({
    state () {
        return {
            isOpened: false,
            messages: []
        }
    },
    mutations: {
        toggleWindow(state) {
            state.isOpened = !state.isOpened
        },
        addMessage(state, payload) {
            state.messages.push(payload)
        },
        forgetData(state) {
            state.messages = []
        }
    }

})

export default store
