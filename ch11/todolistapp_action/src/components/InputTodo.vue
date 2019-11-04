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
import Constant from '../Constant'

export default {
    name : 'input-todo',
    data : function() {
        return { todo : "" }
    },
    methods : {
        addTodo : function() {
            this.$store.dispatch(Constant.ADD_TODO, { todo: this.todo });
            // dispatch 메서드는 액션을 일으키는 메서드입니다.
            // dispatch 라는 말은 메시지를 전송한다 라는 의미입니
            this.todo = "";
        }
    }
}
</script>