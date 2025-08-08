<template>
    <h1>hook함수</h1>
    <button @click="moveScreen()">다른 화면으로 화면이동</button>
</template>

<script>
    export default{
        data() {
            return {
                count1: 0,
            }
        }, 
        //화면이 열리기 전(vue 인스턴스가 생성되기전) 실행되는 함수
        // 예시)목록조회, 상세조회
        // created(){
        //     alert("created 테스트");
        // },

        // 컴포넌트가 화면상에서 제거될 떄 실행되는 함수.(라우트 이동시)
        // 예시) 채팅화면을 벗어나 다른 화면을 이동시에 실시간 연결 종료.
        beforeUnmount() {
            alert("화면종료")
        },
        methods: {
            moveScreen() {
                this.$router.push("/practice/vuetify")
            }
        }
    }
</script>