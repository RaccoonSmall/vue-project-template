<template>
    <div class="container">
        <p>这是第一个页面:{{message}}</p>

        <p><Button type="primary" @click="openModal">打开模态弹窗，组件的使用示例</Button><p>

        <p><Button type="primary" :loading='loading' @click="request">网络请求</Button></p>

        <work-modal ref="workModal" :message.sync="message"></work-modal>

    </div>
</template>

<script>
import {
    workModal
} from '@/components'

import {
    getRequest,
    postRequest,
} from '@/api/api'

export default {
    components:{
        workModal
    },
    data() {
        return{
            message:'Hello Vue.js',
            loading:false,
        }
    },
    methods:{
        openModal() {
            this.$refs.workModal.showModal();
        },
        request() {
            this.loading = true;
            let params = {city:'长沙'}
            getRequest(params).then(v => {
                this.$Notice.open({
                    title:'Response Data',
                    desc:JSON.stringify(v)
                })
            }).catch(e => {
                this.$Notice.open({
                    title:'Response Data',
                    desc:JSON.stringify(e)
                })   
            }).finally(mes => {
                this.loading = false;
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .container{
        p{
            margin-top: 20px;
        }
    }
</style>


