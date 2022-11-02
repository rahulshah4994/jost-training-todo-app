**/todos**

- Get all todos:

  - URL: /todos
  - Method: GET
  - Params: {
    \_page?: number
    \_limit?: number
    \_sort?: "id" | "userId" | "title" | "completed"
    \_order?: "asc" | "desc"
    completed?: true
    title_like?: string // This is used for querying the todos by text
    }

  - Response: {
    id: number
    userId: number
    title: string
    completed: boolean
    }[]

- Get todo by id:

  - URL: /todos/[id]
  - Method: GET
  - Params: {}
  - Response: {
    id: number
    userId: number
    title: string
    completed: boolean
    }

- Update a todo:

  - URL: /todos/[id]
  - Method: PATCH
  - Body: {
    userId?: number
    title?: string
    completed?: boolean
    }
  - Response: {
    id: number
    userId: number
    title: string
    completed: boolean
    }

- Create a todo:
  - URL: /todos
  - Method: POST
  - Body: {
    userId: number
    title: string
    completed: boolean
    }
  - Response: {
    id: number
    userId: number
    title: string
    completed: boolean
    }

**/users**

- Get all users:

  - URL: /users
  - Method: GET
  - Params: {}

  - Response: {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    }[]
