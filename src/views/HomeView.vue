<template>
  <ul class="home">
    <li v-for="item in data" :key=item.num>
      {{ item.name }}
      <button @click="setData({name:'asd',email:'dnaals@naver.com',num:item.num})">
        수정
      </button>

      <button @click="delData(item.num)">삭제</button>
    </li>
  </ul>
  <button @click="postData({name:'aa',email:'황동@네이버'})">
    저장
  </button>
</template>

<script>
// 스토어에 CRUD관련해서 요청
import { mapMutations, mapState } from 'vuex';


export default {
  name: 'HomeView',
  components: {
  },

  computed:{
    ...mapState('testMember',['data'])
  },

  methods:{
    ...mapMutations('testMember',['getData','postData','setData','delData']),

  },
  created(){
    this.getData();
  
  },
  mounted(){
    
  },
  updated(){
    console.log(this.data,'123')
  }
}
</script>
