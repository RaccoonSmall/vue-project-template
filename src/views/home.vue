<template>
    <Layout>
        <Sider 
            width='200' 
            collapsible 
            :collapsed-width="78"
            v-model="isCollapsed" 
            :class="menuitemClasses">
            <Menu 
                theme="dark" 
                :active-name="activeIndex" 
                width='auto'>
                <MenuGroup title="内容管理">
                    <MenuItem name="1" to='page1'>
                        <Icon type="ios-color-filter-outline" />
                        组件/网络请求
                    </MenuItem>
                    <MenuItem name="2" to='page2'>
                        <Icon type="ios-pulse-outline" />
                        vue-echarts 安装
                    </MenuItem>
                </MenuGroup>
            </Menu>
        </Sider>

        <Layout>
            <Header>Vue Project Template</Header>

            <Content>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </Content>

            <Footer>Footer</Footer>
        </Layout>
    </Layout>
</template>

<script>
    export default {
        data () {
            return {
                isCollapsed:false,
            }
        },
        computed:{
            activeIndex() {
                let path = this.$route.path;
                if(path == '/page1') {
                    return '1';
                }else if(path == '/page2') {
                    return '2';
                }
                
            },
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
        }
    }
</script>

<style lang="less" scoped>
    .ivu-layout{
        height: inherit;
    }
    .ivu-layout-header{
        color: white;
    }
    .ivu-layout-content{
        padding: 20px;
    }

    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }


</style>


