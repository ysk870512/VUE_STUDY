<style>
* {  box-sizing: border-box;  }
ul {  margin: 0; padding: 0; }
ul li { 
    cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
    background: #eee; font-size: 14px;  transition: 0.2s;
    -webkit-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;  
}
ul li:hover {  background: #ddd;  }
ul li.checked {
    background: #BBB;  color: #fff; text-decoration: line-through;
}
ul li.checked::before {
    content: ''; position: absolute; border-color: #fff;
    border-style: solid; border-width: 0px 1px 1px 0px; 
    top: 10px; left: 16px;  transform: rotate(45deg);
    height: 8px; width: 8px;
}
.close {
    position: absolute; right: 0; top: 0;
    padding: 8px 12px 8px 12px
}
.close:hover {
    background-color: #f44336;  color: white;
}
</style>
<template>
    <ul id="todolist">
        <li v-for="a in todolist" :key="a.id" :class="checked(a.done)"
            @click="doneToggle(a.id)">
            <span>{{ a.todo }}</span>
            <span v-if="a.done"> (완료)</span>
            <span class="close" v-on:click.stop="deleteTodo(a.id)">&#x00D7;</span>
        </li>
    </ul>
</template>
<script type="text/javascript">
// import eventBus from '../EventBus' 삭제
import Constant from '../Constant' // 추가

export default {
    name: 'List',
    computed : {
        todolist() {
            return this.$store.state.todolist; // 읽기전용 (가져옴)
        }
    },
    methods : {
        checked : function(done){
            if(done) return {checked:true};
            else return {checked:false};
        },
        doneToggle: function(id){
            this.$store.commit(Constant.DONE_TOGGLE, {id:id})
            // commit : Commit(‘[mutation메소드명]’)을 통해 Mutation
            //          그룹에 속한 메서드를 실행할 수 있습니다.
            // 화면에서 일어나는 이벤트를 받아서 변이를 일으키기 위해 $store.commit 메서드 호출
            // $store.commit의 첫번째 인자는 변이의 이름, 두번째 인자는 변이에 전달할 인자
            // 변이의 이름은 단순한 문자열이기 때문에 오타를 내기 쉬우므로 상수를 만들어서 사용하는
            // 것을 권장합니다.
        },
        deleteTodo : function(id){
            this.$store.commit(Constant.DELETE_TODO, {id:id})
        }
    }
    /* 삭제
    created : function() {
        eventBus.$on('add-todo', this.addTodo);
    },
    data : function() {
        return {
            todolist : [
                { id:1, todo : "영화보기", done:false },
                { id:2, todo : "주말 산책", done:true },
                { id:3, todo : "ES6 학습", done:false },
                { id:4, todo : "잠실 야구장", done:false },
            ]
        }
    },
    methods : {
        checked : function(done) {
            if(done) return { checked:true };
            else return { checked:false };
        },
        addTodo : function(todo) {
            if (todo !== "") {
                this.todolist.push(
                    { id:new Date().getTime(), todo : todo, done:false });
            }
        },
        doneToggle : function(id) {
            var index = this.todolist.findIndex((item)=>item.id === id);
            this.todolist[index].done = !this.todolist[index].done;
        },
        deleteTodo : function(id) {
            var index = this.todolist.findIndex((item)=>item.id === id);
            this.todolist.splice(index,1);
        }
    }*/
}
</script>