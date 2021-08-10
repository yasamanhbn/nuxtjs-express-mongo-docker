<template>
    <div class="wrapper">
        <div class="add">
            <form @submit.prevent="postTutorial">
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
                <button class="submit_btn"> Submit </button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"",
            description:"",
            selected_opt:"publish"
        }
    },
    methods:{
        postTutorial(){
            let published = false;
            if(this.selected_opt == "publish"){
                published = true
            }
            let post_data = {
                title:this.title,
                description:this.description,
                published:published}

        this.$axios.post('/api/tutorials',post_data)
        .then(res=>{
            this.$router.push('/')

        })
        .catch(error=>{
            console.log(error);
        }); 
        }
    }
}
</script>
<style scoped>
.wrapper{
    margin: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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