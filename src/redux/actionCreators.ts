import { counterActions } from "./slices/counter";
import { jsonTodosActions } from "./slices/jsonTodos";
import { selectedTodoActions } from "./slices/selectedTodo";
import { todosActions } from "./slices/todos";

export default {
  ...todosActions,
  ...counterActions,
  ...selectedTodoActions,
  ...jsonTodosActions,
};
