
const routerComponents = (path) => () => import (`@/views/${path}`);

let router_master = [
    {
        //登陆
        path: '/login',
        meta: {
            title: '登录',
        },
        component: routerComponents('login'),
    },
];

let router = [
    ...router_master,
    {
        path:'/',
        component:routerComponents('home'),
        children:[
            {
                //page-1
                path:'/page1',
                meta:{
                    title:'',
                },
                component:routerComponents('page1/index'),
            },
            {
                //page-2
                path:'/page2',
                meta:{
                    title:'',
                },
                component:routerComponents('page2/index'),
            }
        ]
    }
];

export default router;

