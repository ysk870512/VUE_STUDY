// 저장소 store
import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant';
Vue.use(Vuex); // 전역으로 선언 (모든 컴포넌트에서 this.$store 로 접근이 가능)

const store = new Vuex.Store({ // Vuex.Store 객체 생성
    // List 컴포넌트가 보유하던 상태 데이터를 저장소가 관리
    state: { // 상태 (data)
        todolist: [
            { id: 1, todo: "영화보기", done: false },
            { id: 2, todo: "주말 산책", done: true },
            { id: 3, todo: "ES6 학습", done: false },
            { id: 4, todo: "잠실 야구장", done: false },
        ]
    },
    mutations: {
        // 변이 객체의 메서드들은 첫 번째 인자가 상태 입니다.
        // 두 번째 인자 payload는 변이에 필요로 하는 데이터입니다.
        // 만약 변이를 일으킬 때 필요한 인자가 여러 개라면 payload를 객체 형태로 전달하면 됩니다.
        // 기존 상태 = state
        // 상태를 변경할 때 필요한 정보 = payload
        [Constant.ADD_TODO]: (state, payload) => {
            if (payload.todo !== "") {
                state.todolist.push({ id: new Date().getTime(), todo: payload.todo, done: false });
            }
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            var index = state.todolist.findIndex((item) => item.id === payload.id);
            state.todolist[index].done = !state.todolist[index].done;
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            var index = state.todolist.findIndex((item) => item.id === payload.id);
            state.todolist.splice(index, 1);
        }
    }
})

export default store;