
export interface toDo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export const fakeAPI: string = 'https://jsonplaceholder.typicode.com/todos/';

export async function getTodosByCount(count: number, url: string) {
  for (let i = 1; i <= count; i++) {
    await fetch(url + i)
      .then<toDo>(response => response.json())
      .then(json => console.log(json))
  }
}
