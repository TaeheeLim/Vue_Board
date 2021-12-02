<template>
    <div class="scrolling-component" ref="scrollComponent">
        <post-component 
            v-for="(post, index) in posts"
            :post="post"
            :key="index"
        />
    </div>
</template>

<script>
import getPosts from '../../../../assets/scrollTest.js'
import PostComponent from './Post.vue';
import { ref, onMounted, onUnmounted} from 'vue'

export default {
    components : {
        PostComponent
    },
    setup () {
        const posts = ref(getPosts(10))
        //const posts = ref([]);
        const scrollComponent = ref(null)

        /* 
        axios.get('/scrollTest.json').then(a => {
            posts.value = a.data
        })
        onMounted안에 사용 ??
        */
        const loadMorePosts = () => {
            let newPosts = getPosts(10)
            posts.value.push(...newPosts);
        }

        onMounted(() => {
            window.addEventListener("scroll", handleScroll)
        })

        onUnmounted(() => {
            window.removeEventListener("scroll", handleScroll)
        })

        const handleScroll = (e) => {
            let element = scrollComponent.value
            if (element.getBoundingClientRect().bottom < window.innerHeight) {
                loadMorePosts()
            }
        }

        return {
            posts,
            scrollComponent
        }
    }
}
</script>

<style>

</style>