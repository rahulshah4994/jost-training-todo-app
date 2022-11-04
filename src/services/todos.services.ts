import {
  GetTodosResponse,
  GetTodosParams,
  GetTodoResponse,
  PatchTodoBody,
  PatchTodoResponse,
  PostTodoBody,
  PostTodoResponse,
} from "../types/todos.types"
import { GET, PATCH, POST } from "./api"

export const getTodos = (params?: GetTodosParams): Promise<GetTodosResponse> => {
  return GET("/todos", params)
}

export const getTodo = (id: number): Promise<GetTodoResponse> => {
  return GET(`/todos/${id}`)
}
export const patchTodo = (id: number, body: PatchTodoBody): Promise<PatchTodoResponse> => {
  return PATCH(`/todos/${id}`, body)
}
export const postTodo = (body: PostTodoBody): Promise<PostTodoResponse> => {
  console.log("Insid epost todo")
  return POST("/todos", body)
}
