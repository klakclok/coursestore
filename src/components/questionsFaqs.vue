<template>
    <div id="faqs">
        <div class="questions">
            <div class="questions-item">
                <input class="questions-item__input" type="checkbox" :id="faq.id" >
                <label class="questioan-item__trigger" :for="faq.id">
                    <p>{{faq.title}}</p>
                </label>
                <div class="questioan-item__content">
                    <p>{{faq.description}}</p> 
                </div>
            </div>



        </div>
    </div> 
</template>

<script>
    export default{
        name: "questionsFaqs",
        props:{
            faq:{
                type: Object,
                required: true
            },
            
        }
    }
    
</script>


<style scoped>
.questions {
    
    border: 1px solid #E5E5E5;
    border-radius: 6px;
    width: 1056px;
    
}

.questions-item {
    position: relative;
    /* margin-bottom: 20px; */
    
}
.questions-item__input{
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    
}
.questioan-item__trigger {
    display: block;
    /* padding: 30px; */
    /* font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px; */
    border-bottom: 1px solid #E5E5E5;

    cursor: pointer;
    

    padding-right: 26px;
    cursor: pointer;

}
.questioan-item__trigger p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 34px;
    /* padding: 30px;
    margin-left: 33px; */
    margin: 30px 0px 30px 33px;
    
}
.questioan-item__content {
    /* padding: 20px; */
    /* border: 1px solid black; */
    /* border-top: none; */
    display: none;
    border-bottom: 1px solid #E5E5E5;
    /* font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    max-width: 970px; */
    transition: all 1s ease;
}
.questioan-item__content p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    max-width: 970px;
    /* position: relative; */
    margin: 0px 126px 30px 33px;
}
.questions-item__input:checked ~ .questioan-item__trigger{
    border-bottom: none;
}
.questions-item__input:checked ~ .questioan-item__content{
    display: block;
}
</style>