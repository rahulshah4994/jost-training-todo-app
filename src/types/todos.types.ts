export interface TodoItem {
  id: number
  userId: number
  title: string
  completed: boolean
}

//Get All Todos - getTodos
export interface GetTodosParams {
  _page?: number
  _limit?: number
  _sort?: "id" | "userId" | "title" | "completed"
  _order?: "asc" | "desc"
  completed?: true
  title_like?: string // This is used for querying the todos by text,
}

export type GetTodosResponse = TodoItem[]

//Get Todo By ID
export type GetTodoResponse = TodoItem

//Patch Todo
export interface PatchTodoBody {
  userId?: number
  title?: string
  completed?: boolean
}

export type PatchTodoResponse = TodoItem

//Post Todo
export interface PostTodoBody {
  userId: number
  title: string
  completed: boolean
}

export type PostTodoResponse = TodoItem
