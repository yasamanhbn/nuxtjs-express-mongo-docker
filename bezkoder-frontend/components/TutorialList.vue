<template>
    <div class="tutorial-wrapper row">
        <div class="col-8">
            <div class="input-group">
                <input type="text" 
                class="form-control"
                 placeholder="Search by title" 
                 v-model="title"/>
            <div class="input-group-append">
            <button class="btn btn-outline-secondary" 
                    @click="searchItem"
                    type="button">
                Search 
            </button>
            </div>
            </div>
        </div>
        <div class="col-md-6 tut_wrapper">
            <h4>Tutorials List</h4>
            <ul class="list-group">
                <li class="list-group-item"
                    v-for="(tutorial,index) in tutorials"  
                    :key="index">
                <b>{{tutorial.title}}</b>
                </li>
            </ul>    
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            title:"",
            tutorials:[]
        }
    },
    methods:{
        searchItem(){
        this.$axios.get('/api/tutorials?title='+this.title)
        .then(res=>{
            this.$router.push('/'+res.data[0].id)    
            console.log(res)
        })
        .catch(error=>{
            console.log(error);
        }); 
        }
    },
    created(){
        this.$axios.get('/api/tutorials/published')
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
.tutorial-wrapper{
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.tut_wrapper{
    padding: 10px;
    margin-top: 40px;
    background-color: rgb(161, 230, 230);
}
.list-group-item{
    cursor: pointer;
    margin: 5px;
}
h4{
    margin: 20px;
}
</style>