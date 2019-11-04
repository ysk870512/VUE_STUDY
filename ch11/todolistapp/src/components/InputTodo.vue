<style>
* {  box-sizing: border-box;  }
.input {
    border: none; width: 75%; height:35px; padding: 10px;
    float: left; font-size: 16px;
}
.addbutton {
    padding: 10px; width: 25%; height:35px; background: #d9d9d9; 
    color: #555; float: left; text-align: center;
    font-size: 13px; cursor: pointer; transition: 0.3s;
}
.addbutton:hover { background-color: #bbb; }
</style>
<template>
    <div>
        <input class="input" type="text" id="task" v-model.trim="todo" 
            placeholder="입력 후 엔터!" v-on:keyup.enter="addTodo">
        <span class="addbutton" v-on:click="addTodo">추 가</span>
    </div>    
</template>
<script type="text/javascript">
// import eventBus from '../EventBus' 삭제
import Constant from '../Constant' // 추가

export default {
    name : 'input-todo',
    data : function() {
        return { todo : "" }
    },
    // InputTodo.vue 는 로컬 상태 데이터를 가지고 있습니다.
    // 이유는 이 상태 데이터는 다른 컴포넌트에서는 이용되지 않으며, 관리해야 할 만큼
    // 중요한 데이터가 아니기 때문입니다.
    methods : {
        addTodo : function() {
            // eventBus.$emit('add-todo', this.todo); 삭제
            this.$store.commit(Constant.ADD_TODO, {todo: this.todo})
            this.todo = "";
        }
    }
}
</script>