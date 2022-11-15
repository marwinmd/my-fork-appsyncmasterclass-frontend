import actions from "@/store/modules/signup/actions";
import getters from "@/store/modules/signup/getters";
import mutations from "@/store/modules/signup/mutations";

const state = () => ({
    step: ''
})

export default {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}
