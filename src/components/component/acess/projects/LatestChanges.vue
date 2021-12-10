<template>
<div id="change-head">
    Latest Changes
</div>
<div id="change-list" @mousewheel="wheel">
    <div class="list-detail" v-for="(a,i) in 50" :key="i">
        <div class="list-wrapper">
            <div class="content">
                Test Project
            </div>
            <div class="content">
                <div>Issue</div>
                <div></div>
                <div></div>
            </div>
            <div class="content">
                <div>Schedule</div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// const container = document.querySelector('#change-list');
// let offset = 0;
// container
// window.addEventListener('wheel', (e) => {
//     offset += Math.sign(e.deltaY) * 60;
//     console.log(e)
//     console.log(offset)
//     if (offset < 0) {
//         offset = 0;
//     } else if (offset > 10000 - window.innerWidth) {
//         offset = 10000 - window.innerWidth;
//     }
    
//     // container.style.transform = `translateX(-${offset}px`;
// });
export default {
    name : 'LatestChanges',
    data() {
        return {
            color: '#fff',
            scroll: 0,
            offset: 0,
            boxInnerWidth: 0,
            countLeft: -1,
            countRight: -1,
        }
        
    },
    methods: {
        //가로 스크롤 ^^
        wheel(e){
            let target = document.querySelector('#change-list')

            let wheelDelta = e.wheelDelta;

            if(wheelDelta > 0 && target.offsetWidth + target.scrollLeft < target.scrollWidth){
                console.log("여기 왼쪽 맞지")
                target.scrollLeft = (wheelDelta * this.countLeft);
                this.countLeft--;
                this.countRight++;
            } else if (wheelDelta < 0 && target.offsetWidth + target.scrollLeft < target.scrollWidth) {
                target.scrollLeft = (wheelDelta * this.countRight);
                this.countRight--;
                this.countLeft++;
            }
        }
    },
    
    mounted() {
    }
}
</script>

<style scoped>
#change-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    gap: 60px;
    overflow: scroll;
}

.list-detail {
    border-radius: 10px;
    width: 240px; 
    height: 260px;
    font-size: 20px;
    background-color: #2C2F3B;
    padding: 10px;
    
}

.list-detail > div:first-child {
    border-bottom: 1px solid #717790;
    color: #717790;
    padding-bottom: 10px;
}

.list-wrapper {
    width: 180px;
}

</style>