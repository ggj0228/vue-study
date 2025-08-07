import { createRouter, createWebHistory } from "vue-router"

// routes에서 url 경로와 화면을 매핑시켜준다.
const routes = []

const router = createRouter(
{
    // vue router는 내부적으로 크게 2가지 종류가 있음.
    // 1. createWebHistory: localhost:3000/member/create
    // 2.createWebHashHistory: /#/member/create
    history: createWebHistory(), 
    routes
}
)
// export된 router를 main.js에서 import해줘야 함
export default router