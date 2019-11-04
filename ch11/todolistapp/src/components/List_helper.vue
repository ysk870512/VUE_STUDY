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
        <!-- <li v-for="a in todolist" :key="a.id" :class="checked(a.done)"
            @click="doneToggle(a.id)"> 변경 -->
            <li v-for="a in todolist" :key="a.id" :class="checked(a.done)"
            @click="doneToggle({id: a.id})">
            <span>{{ a.todo }}</span>
            <span v-if="a.done"> (완료)</span>
            <!-- <span class="close" v-on:click.stop="deleteTodo(a.id)">&#x00D7;</span> 변경 -->
            <span class="close" @click.stop="deleteTodo({id: a.id})">&#x00D7;</span>
        </li>
    </ul>
</template>
<script type="text/javascript">
import Constant from '../Constant' 
import {mapState, mapMutations} from 'vuex' // 추가 (컴포넌트 바인딩 헬퍼 메서드 참조)

export default {
    name: 'List',
    /* 변경
    computed : {
        todolist() {
            return this.$store.state.todolist; // 읽기전용 (가져옴)
        }
    },*/
    computed : mapState(['todolist']), 
    // todolsit 상태를 계산형 속성에 자동 바인딩
    // 여러 개의 상태를 바인딩하려면 배열에 상태 객체의 속성명을 나열하면 됩니다.
    methods : {
        checked : function(done){
            if(done) return {checked:true};
            else return {checked:false};
        },
        /* 변경
        doneToggle: function(id){
            this.$store.commit(Constant.DONE_TOGGLE, {id:id})
        },
        deleteTodo : function(id){
            this.$store.commit(Constant.DELETE_TODO, {id:id})
        }*/
        ...mapMutations([
            Constant.DELETE_TODO,
            Constant.DONE_TOGGLE
        ])
        // mapMutations 헬퍼 메서드는 변이를 동일한 이름의 메서드에 자동으로 연결합니다.
        // 변이를 일으키지 않는 메서드가 함께 존재할 경우(checked)에는 mapMutations  
        // 헬퍼 메서드가 만들어낸 객체와 변이를 일으키지 않는 메서드를 포함하는 객체를 ES6
        // 문법인 전개연산자를 이용해서 병합합니다.

        // 한 가지 주의할 점은 컴포넌트에서 mapMutations 헬퍼 메서드를 이용해 변이를
        // 메서드에 바인딩한 경우 호출할 때 변이의 인자 형식을 따라야 합니다.
        // @click="doneToggle(id: a.id)"
        // @click.stop="deleteTodo(id: a.id)"

        // 그림 11-09
    }
}
</script>