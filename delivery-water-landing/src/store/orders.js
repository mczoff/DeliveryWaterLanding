import axios from 'axios'

export default {
    state: {
        orders: []
    },
    getters: {
        orders: (state) => state.orders
    },
    mutations: {
        setOrders(state, payload) {
            state.orders = payload;
        },
    },
    actions: {
        addOrder({state, commit}, order) {
            const findedOrder = state.orders.find(function (item) {
                return item.id === order.id
            })

            if(findedOrder != null)
            {
                commit('setWarning', true)
                commit('setWarningText', "This offer already in basket!")

                return
            }

            state.orders.push(order)
        },
        deleteOrder({state, commit}, order) {
            const findedOrder = state.orders.find(function (item) {
                return item.id === order.id
            })

            if(findedOrder == null)
            {
                commit('setWarning', true)
                commit('setWarningText', "Cant delete order in basket!")

                return
            }

            const newOrders = state.orders.filter(function(item){
                return item.id !== order.id;
            });

            commit('setOrders', newOrders)
        },
        sendOrder({state, commit}, userInformation) {
            axios.post("localhost:3000/api/orders", {
                firstName: userInformation.firstName,
                middleName: userInformation.middleName,
                lastName: userInformation.lastName,
                email: userInformation.email,
                phone: userInformation.phone,
                features: userInformation.features,
                goods: userInformation.goods
            })

            commit('setOrders', newOrders)
        }
    }
}
