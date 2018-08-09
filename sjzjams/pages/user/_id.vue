<template>
 <section class="container">
     <div class="content">
    <h1 class="red">标题 {{info.title}}</h1> 
    <span>
        作者:{{info.author}}
    </span>
     <img :src="info.image"/>
    <h2>
      简介：{{info.summary}}
    </h2>
     </div>
     <div>
       <span>项目名称：{{productName}}</span>
       <a href="/" class="button--green">返回首页</a>
     </div>
 </section>

  
</template>

<script>
import axios from 'axios'
export default {
    transition: 'test',
    
  data(){
   return {
    productName: 'world'
   }
  },
  //调用豆瓣api
  async asyncData ({ params }) {
      console.log(params);
    return  axios.get('https://api.douban.com/v2/book/'+params.id+'')
    .then((res)=>{
      return{info:res.data}
    })
    //return { title:data.title, author: data.author,summary:data.summary,image:data.image}
  },
}
</script>



