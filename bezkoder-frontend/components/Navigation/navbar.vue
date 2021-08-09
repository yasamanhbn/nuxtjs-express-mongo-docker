<template>
    <div class="navigation">
        <ul class="nav">
            <li class="nav-item"> 
                <NuxtLink to="/">bezKoder</NuxtLink>
             </li>
            <li class="nav-item"> 
                <NuxtLink to="/tutorials">Tutorials</NuxtLink> 
            </li>
            <li class="nav-item"> 
                <NuxtLink to="/addTutorial">Add</NuxtLink> 
            </li>
        </ul>
    </div>
</template>
<style scoped>
.navigation{
    width: 100%;
    margin: 0;
}
.nav{
    display: flex;
    list-style: none;
    background: #ffccb3;
}
.nav-item a{
    text-decoration: none;
    color: #e65c00;
}
.nav-item{
    margin: 10px 20px;
}
</style>