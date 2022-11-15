import Vue from 'vue';
import Vuex from 'vuex'
import authentication from './modules/authentification';
import signup from './modules/signup'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        authentication,
        signup
    }
})
