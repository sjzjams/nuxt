<template>
 <section class="container">
    <h1 class="red">标题 {{ title }}</h1> 
    <span>
        author:{{author}}
    </span>
     <img :src="image">
    <h2>
      {{summary}}
    </h2>
 </section>

  
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return { name: 'world' }
  },
  //调用豆瓣api
  async asyncData ({ params }) {
    let { data } = await axios.get('https://api.douban.com/v2/book/1220562')
    return { title:data.title, author: data.author,summary:data.summary,image:data.image }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>
