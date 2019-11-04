<template>
  <div>
    <div>data.js name = {{name}}</div>
    <input type="text" v-model.trim="inputName" @keyup.enter="changeName" />
    <button @click="changeName">바꾸기</button>
  </div>
</template>
<script>
import eventBus from '../EventBus'
export default {
  name: 'testComponent02',
  props: ['name'],
  // data : function() {
  //     return {
  //       inputName: ''
  //     }
  // },
  data: () => ({
    inputName: ''
  }),
  methods: {
      changeName : function() {
          eventBus.$emit('change-name', this.inputName); // 이벤트 발신하면서 현재 입력값 전달
          this.inputName = "";
      }
      // changeName : () => {
      //     eventBus.$emit('change-name', this.inputName); // 이벤트 발신하면서 현재 입력값 전달
      //     this.inputName = "";
      // }
  }
}
</script>