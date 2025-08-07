<template>
   <!--화면의 요소는 temaplate 안에 코딩-->>

</template>

<!-- js코드는 script안에 코딩-->
<script>
 import HelloWorld from './components/HelloWorld.vue';
 // vue는 export을 통해 해당 요소를 다른 화면에서도 import할 수 있도록 설정
 // 즉 아래 문법은 App.vue하는 화면을 다른 파일에서도 import할 수 있도록 컴포넌트화시킨 것.

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- 디자인 요소는 스타일 태그 안에 코딩 -->
<style scoped>

</style>
