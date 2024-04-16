import { ITodo } from "types/ITodo"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface favoritesMoviesState {
  typeTodo: "all" | "active" | "complited"
  coplitedTodo: number
  modifiedTodo: ITodo[]
  todo: ITodo[]
}

const initialState: favoritesMoviesState = {
  typeTodo: "all",
  coplitedTodo: 0,
  modifiedTodo: [],
  todo: [],
}

export const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todo.push({
        id: new Date().toISOString(),
        text: action.payload,
        complited: false,
      })
    },

    currentComplitedTodo: (state) => {
      state.coplitedTodo = state.todo.filter(
        (item) => item.complited === true
      ).length
    },

    toogleTodoComplete: (state, action: PayloadAction<string>) => {
      const toggleTodo = state.todo.find((item) => item.id === action.payload)
      if (toggleTodo) {
        toggleTodo.complited = !toggleTodo.complited
      }
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload)
      state.modifiedTodo = state.modifiedTodo.filter(
        (item) => item.id !== action.payload
      )
    },
    clearTodoList: (state) => {
      state.todo.length = 0
    },
    changeTodoType: (state, action: PayloadAction<string | undefined>) => {
      switch (action.payload) {
        case "all":
          state.modifiedTodo = state.todo
          break
        case "complited":
          state.modifiedTodo = state.todo.filter((item) => item.complited)
          break
        case "active":
          state.modifiedTodo = state.todo.filter((item) => !item.complited)
          break
        default:
          state.modifiedTodo = state.todo
          break
      }
    },
  },
})

export const {
  changeTodoType,
  addTodo,
  clearTodoList,
  removeTodo,
  toogleTodoComplete,
  currentComplitedTodo,
} = TodosSlice.actions

export const TodosReducer = TodosSlice.reducer
