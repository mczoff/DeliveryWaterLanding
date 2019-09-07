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
        }
    }
}
