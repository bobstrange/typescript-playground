import Raect from "react";

type Priority = "default" | "low" | "high";

type TodoItemProps = {
  title: string;
  description: string;
  priority: Priority;
};

// Partial

class TodoItem {
  constructor(todoItemProps: Partial<TodoItemProps> = {}) {}
}

const serviceConfig: Record<string, string | number | boolean> = {
  port: 3000,
  basePath: "http://localhost",
  enableStripePayments: true,
};

type ServiceConfigParams = "port" | "basePath" | "enableStripePayments";
const serviceConfig2: Record<ServiceConfigParams, string | number | boolean> = {
  port: 3000,
  basePath: "http://localhost",
  enableStripePayments: true,
};

// Required

type OriginalTodoItemProps = Required<Partial<TodoItemProps>>;

// Pick
