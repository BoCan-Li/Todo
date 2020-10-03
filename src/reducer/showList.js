const init = {
    data: []
}

export default function showList (state=init, action){
    const {data=[]} = state;
    switch(action.type){
        case 'add':
            return {
                ...state,
                data: data.concat([action.posts])
            }
        case 'del':
            data.splice(action.posts, 1)
            return {
                ...state,
                data
            }
        case 'change':
            data.splice(action.posts.index, 1, action.posts.objs)
            return {
                ...state,
                data
            }
        default:
            return state
    }
}