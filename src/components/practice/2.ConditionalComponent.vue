<template>
    <h1>vue 조건식</h1>
    
    <button @click="doLogin" v-if="!isLogined">로그인버튼</button>
    <button @click="doLogout" v-if="isLogined">로그아웃 버튼</button>
    <div v-if="!isLogined">로그인해주세요</div>
    <div v-if="isLogined">환영합니다.</div>

    <h1>상품목록조회</h1>
    <table>
        <thead>
            <tr>
                <th>상품명</th>
                <th>상품가격</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in productList" :key="product.id">
            <td>{{product.id}}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';
    export default{
        data() {
            return{
                isLogined: true,
                productList: [ ]
                // productList: [{id:1, name:"시과", price:3400},
                // {id:2, name:"배", price:4000},
                // {id:3, name:"수박", price:23000}]
            }
        },
        // 화면이 열림과 동시에 실행되는 hook함수: created
        // axios쓰면 try catch 매우매우매우 높은 확률로 해야함
        async created() {
            const response = await axios.get("http://localhost:8080/product/list");
            this.productList = response.data.response.content;
        },

        methods: {
            doLogin() {
                this.isLogined = true;
            },
            doLogout(){
                this.isLogined = false;
            }
        }

    }
</script>