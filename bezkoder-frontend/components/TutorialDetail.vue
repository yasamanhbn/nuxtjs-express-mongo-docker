<template>
<div class="wraper">
    <div class="panel">
        <h3> <b> Title </b>: {{post_detail.title}} </h3>
        <h4> <b>description:</b> {{post_detail.description}} </h4>
        <h5> <b> created at </b> {{post_detail.createdAt}} </h5>
        <h5> <b> updated at </b> {{post_detail.updatedAt}} </h5>
        <h5> <b> post id : </b> {{post_detail.id}} </h5>
        <h5> <b> Published : </b> {{post_detail.published ? "yes" : "no"}}</h5>
    </div>
    <div class="btn-wraper">
        <button class="btn btn-danger"
                @click="deleteCourse"> Delete </button>
        <button class="btn btn-success" 
                v-if="!post_detail.published"
                @click="publishedCourse"> Publish </button>
        <button class="btn btn-primary"
                @click="isUpdated = true"> Update </button>
    </div>
    <div v-if="isUpdated">
        <form @submit.prevent="updateCourse">
            <label for="title"> Title </label>
            <input type="text" v-model="title" id="title">
            <label for="description"> Description </label>
            <textarea type="text" v-model="description" id="description"/>
            <select id="published" 
                name="publish"
                v-model="selected_opt">
            <option value="publish"> publish </option>
            <option value="not publish">not publish </option>
            </select>
            <button class="submit_btn"> update </button>
        </form>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            post_detail:"",
            title:"",
            description:"",
            selected_opt:"publish",
            isUpdated:false
        }
    },
    methods:{
        publishedCourse(){
            let publishedData = {
                published: true
            }
            this.$axios.put('/api/tutorials/' + this.$route.params.id,publishedData)
            .then(res=>{
                this.$router.push('/')
                console.log(res)
            })
        },
        updateCourse(){
           let updatedData = {
               title: this.title,
               description : this.description,
               published : this.selected_opt == "publish" ? true : false
           }
            this.$axios.put('/api/tutorials/' + this.$route.params.id,updatedData)
            .then(res=>{
                this.$router.push('/')
                console.log(res)
            })
        },
        deleteCourse(){
            this.$axios.delete('/api/tutorials/' + this.$route.params.id)
            .then(res=>{
                this.$router.push('/')
            })
        }
    },
    created(){
        this.$axios.get('/api/tutorials/' + this.$route.params.id)
        .then(res=>{
            this.post_detail = res.data  
            this.title = res.data.title
            this.description = res.data.description
            this.selected_opt = res.data.published ? "publish" :" not publish"
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
    min-height: 40vh;
}
.panel{
    margin-top: 10%;
    padding: 5%;
    border-radius: 10px;
    background-color: rgb(207, 172, 240);
}
.btn-wraper{
    margin-top: 20px;
}
.btn{
    margin: 5px;
}

.add{
    padding: 20px;
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: rgb(164, 233, 210);
}
input,textarea{
    width: 100%;
    margin:0 10px 10px 0;
    border-radius: 5px;
    border: solid rgb(109, 174, 228) 2px;
    outline: none
}
#published{
    outline: none;
    width: 40%;
    margin-bottom: 20px;
}
.submit_btn{
    outline: none;
    background-color: darkcyan;
    border: none;
    display: block;
    width: 40%;
    margin: 0 auto;
    font-size: 1.2rem;
    border-radius: 5px;
}

</style>