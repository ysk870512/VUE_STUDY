<template>
  <div id="app">
    <p>test01 컴포넌트 : <test01 v-bind:name="name"></test01></p>
    <p>test02 컴포넌트 : <test02 v-bind:name="name"></test02></p>
  </div>
</template>

<script>
import eventBus from './EventBus'
import data from './Data'
import test01 from './components/TestComponent01.vue'
import test02 from './components/TestComponent02.vue'

export default {
  name: 'app',
  data: () => ({
    name: data.name
  }),
  components: {
    test01,
    test02
  },
  methods: {
    changeName: function(name) {
      this.name = name
    }
  },
  created: function() {
    eventBus.$on('change-name', this.changeName);  // create 라이프사이클을 이용해서 인스턴스 생성된 후 이벤트 감지를 설정함
  }
}
</script>
