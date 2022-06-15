type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface Todo {
  name: boolean,
  title: string,
  test: number
}

type tt = [
  MyPick<Todo, 'title' | 'name'>
]

const test: tt = [
  {name: true, title: 'rr'}
]