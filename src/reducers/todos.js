const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'REMOVE_TODO':
      const index = state.findIndex(x => x.id === action.id)
      if(index > -1) state.splice(index, 1)

      return [...state]
    default:
      return state
  }
}

export default todos
