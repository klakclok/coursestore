<template>
    <div id="faqs-list">
        <QuestionsFaqs 
        :key="faq.id"
        v-for="faq in faqs"
        :faq="faq"
        />
    </div>
</template>

<script>
import QuestionsFaqs from "./questionsFaqs.vue";
export default {
    name:'faqs-list',
    components:{
        QuestionsFaqs
    },
    props:{
        faqs:{
            type: Array,
            required:true
        }
    }
}
</script>