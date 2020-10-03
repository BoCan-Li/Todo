import Home from '../component/Home'
import Todo from '../component/Todo'
import ShowList from '../component/Todo/ShowList'
import Finish from '../component/Todo/Finish'
import Unfinish from '../component/Todo/Unfinish'

const routerList = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/todo',
        component: Todo,
        routes: [
            {
                path: '/todo/list',
                component: ShowList
            },
            {
                path: '/todo/finish',
                component: Finish
            },
            {
                path: '/todo/unfinish',
                component: Unfinish
            }
        ]
    }
]
export default routerList