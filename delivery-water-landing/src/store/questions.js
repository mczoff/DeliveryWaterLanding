import axios from 'axios'

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        sendQuestion({commit}, questionInformation) {
            axios.post("http://localhost:3000/api/questions", {
                name: questionInformation.firstName,
                email: questionInformation.email,
                phone: questionInformation.phone,
                text: questionInformation.text
            })
        }
    }
}
