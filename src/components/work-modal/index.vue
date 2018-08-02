<template>
        <Modal
            v-model="modal"
            title="这是一个对话框"
            @on-ok="ok">
            <Input v-model="content" @on-change="workChange"/>
        </Modal>
</template>

<script>
    export default {
        props:{
            message:{
                type:String,
            }
        },
        data () {
            return {
                modal: false,
                content:this.message
            }
        },
        methods: {
            showModal() {
                this.modal = true;
            },
            hideModal() {
                this.modal = false;
            },
            ok () {
                this.$Message.info('Clicked ok');
            },
            workChange() {
                this.$emit('update:message',this.content);
            }
        }
    }
</script>
