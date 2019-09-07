import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        themes: {
            light: {
                primary: '#2879FF',
                secondary: '#707e85',
                accent: '#28456b',
                error: '#b71c1c',
            },
        },
    }
});
