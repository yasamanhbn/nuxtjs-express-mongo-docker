<template>
<div class="wraper">
  <h1>
    welcome to this app
  </h1>
  <div class="tut_wrapper">
    <h4>Tutorials List</h4>
    <ul class="list-group">
      <li class="list-group-item"
        v-for="(tutorial,index) in tutorials"  
        @click="detail(tutorial.id)"
        :key="index">
        <b>{{tutorial.title}}</b>
      </li>
    </ul>    
  </div>
  <button class="btn btn-danger"
          @click="removeAll"> Remove All </button>
</div>
</template>

<script>
export default {
    data(){
        return{
            tutorials:[]
        }
    },
     methods:{
        detail(post_id){
          this.$router.push('/'+ post_id)
        },
        removeAll(){
          this.$axios.delete('/api/tutorials/')
          .then(res=>{
            console.log(res)
            this.$router.push('/addTutorial')
        })
      }
    },
    created(){
        this.$axios.get('/api/tutorials/')
        .then(res=>{
            this.tutorials = res.data
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error);
        }); 
    }
}
</script>
<style scoped>
.wraper{
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
h1, h4{
  margin: 2%;
}
.tut_wrapper{
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: lightpink;
  padding: 10px;
}
.list-group{
  width: 100%;
}
.list-group-item{
  margin: 5px;
  cursor: pointer;
}
.btn{
  margin: 10px;
}

</style>