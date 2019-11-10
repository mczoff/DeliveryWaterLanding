import Vue from 'vue'
import Vuex from 'vuex'

import orders from "./orders";
import shared from "./shared";
import questions from "./questions";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        orders,
        questions,
        shared
    }
})
