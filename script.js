const parent=React.createElement('div',{id:'parent'},
    [React.createElement('div',{id:'sibilings1'},
        React.createElement('h1',{},"hello baby")
    ),React.createElement('div',{id:'sibilings2'},
        React.createElement('h1',{},'hey bacchaa')
    )]
)

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(parent); 