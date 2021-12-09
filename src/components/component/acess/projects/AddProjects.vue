<template>
    <div class="container">
        <ul class="item-list">
            <li id="firstLi" class="list-item btn">
                <router-link to="/community/free">
                    <div id="divdiv">
                        <i class="fas fa-plus-circle"></i>
                    </div>
                </router-link>
            </li>
            <li class="list-item" v-for="item in 30" :key="item">
                <router-link @mouseover="selectProject" :to="`/access/project/${item.project_name}`">
                    <div class="detail">
                        <div>project name</div>
                        <div>
                            <span>기간: 2021-01-01 ~ 2021~02~01</span>
                            <span>진행도: 50%</span>
                        </div>
                        <div>팀장: kade</div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'AddProjects',
    data() {
        return {
            
        }
    },
    methods: {
        selectProject(){}    
    },

}
</script>

<style scoped>
.container {
    /* border: 1px solid #fff; */
    height: 100%;
    padding: 60px;
    width: 100%;
}

.item-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
    column-gap: 20px;
    row-gap: 30px;
    height: 100%;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

.item-list::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}

.item-list li {
    background-color: #2C2F3B;
    border-radius: 6px;
    padding: 10px;
}
.detail {
    color : #717790;
}
.detail > div:nth-child(1) {
    border-bottom: 1px solid #717790 ;
    padding-bottom: 8px;
}
.detail > div:nth-child(2) {
    margin-top: 10px;
}
.detail > div:nth-child(2) > span:nth-child(2){
    padding-left: 100px;
}

.detail > div:nth-child(3) {
    padding-top: 10px;
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
a {
    color: white;
}
#firstLi > a:nth-child(1) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>