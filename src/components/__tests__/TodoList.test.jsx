import { getAllByRole } from "@testing-library/dom"
import React from "react"
import renderer from 'react-test-renderer'
import TodoList from '../TodoList'

const mockedProps = ({
    todos: [
        {
            "id": 0,
            "text": "test",
            "completed": false
        },
        {
            "id": 1,
            "text": "test1",
            "completed": false
        },
        {
            "id": 2,
            "text": "test2",
            "completed": false
        },
        {
            "id": 3,
            "text": "test3",
            "completed": false
        }
    ],
    toggleTodo: () => {}
})

test('Should render a list of mocked TODO', () => {
    const todoList = renderer.create(<TodoList {...mockedProps} />);
    
    const list = tree.getByTestId('todo-list');
    expect(list).toBeVisible();

    const todoArray = todoList.getAllByRole('listitem')
    expect(todoArray.length).toBe(4)
})