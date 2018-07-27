<template>
 <section class="container">
     <div class="content">
    <h1 class="red"><a href="/user/1220562" class="button--green">标题 {{ title }}</a></h1> 
    <span>
        作者:{{author}}
    </span>
     <img :src="image"/>
    <h2>
      简介：{{summary}}
    </h2>
     </div>
     <div class="content">
    <h1 class="red">标题1 {{ title1 }}</h1> 
    <span>
        作者1:{{author1}}
    </span>
     <img :src="image1"/>
    <h2>
      简介1：{{summary1}}
    </h2>
     </div>
     <div>
       <span>项目名称：{{productName}}</span>
     </div>
 </section>

  
</template>

<script>
import axios from 'axios'
export default {
  data(){
   return { productName: 'world' }
  },
  //调用豆瓣api
  async asyncData ({ params }) {
    var that=this
    return axios.all([
      axios.get('https://api.douban.com/v2/book/1220562'),
      axios.get('https://api.douban.com/v2/book/1220561')])
      .then(axios.spread(function (book1,book2) {
        console.log('book1',book1.data);
        return { 
          title:book1.data.title, 
          author: book1.data.tags[0].name,
          summary:book1.data.summary,
          image:book1.data.image ,
          title1:book2.data.title, 
          author1: book2.data.tags[0].name,
          summary1:book2.data.summary,
          image1:book2.data.image ,
          }
      }))
  },
}
</script>



