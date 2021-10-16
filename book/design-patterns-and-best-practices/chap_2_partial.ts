type Priority = "default" | "low" | "high";

type TodoItemProps = {
  title: string;
  description: string;
  priority: Priority;
};

class TodoItem {
  constructor(todoItemProps: Partial<TodoItemProps> = {}) {}
}
