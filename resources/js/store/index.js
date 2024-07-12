import { createStore } from "vuex";
import fruit from './modules/fruit.js'
import userStore from './modules/user.js'
const store = createStore({
    modules: {
        fruit: fruit,
        userStore: userStore
    }
});
export default store
