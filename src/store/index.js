import vue from 'vue'
import vuex from 'vuex'

import actions from './action'
import mutations from './mutation'

vue.use(vuex);

//State 状态管理对象
let state = {
    token:'',
};

//Getters
let getters = {
};

export default new vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

