import { TodosReducer } from "models/Todos"
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
  TodosReducer,
})

export type RootState = ReturnType<typeof rootReducer>
