let state = {
    dialogsPage: {
        dialogs:[
            {name: 'Andrey'},
            {name: 'Noek'},
            {name: 'Sisterf'},
        ],
        messages:[
            {message: 'Hello' },
            {message: 'Aasdcx' },
            {message: 'Hola' },
        ]      
    },
    profilePage:{
        posts:[
            {name:'Sasha', message:'Priuet'},
            {name:'Poker', message:'Cido'},
            {name:'Debil', message:'Sicla'},
        ],

    }
}

export let addPost = (message) =>{
    state.profilePage.posts.push({
        name: 'asdd',
        message: message
    })

    rerenderEntireTree()

}

let rerenderEntireTree = () =>{
    console.log(state)
}

export const sub = (observer) => {
    rerenderEntireTree = observer
}

export default state
