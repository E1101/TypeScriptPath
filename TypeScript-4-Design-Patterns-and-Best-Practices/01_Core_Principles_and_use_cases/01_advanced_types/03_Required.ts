/**
 * [ Required ]
 *
 * This is the exact opposite of the Partial type. You want to use this type to create another type
 * but with all property keys as required instead. If a type has no optional parameters, then it
 * does not modify the signature of the original type:
 */
enum PRIORITY {
  DEFAULT,
  LOW,
  HIGH,
}

interface TodoItemProps {
  title: string;
  description: string;
  priority: PRIORITY;
}

type OriginalTodoItemProps = Required<Partial<TodoItemProps>>; // type is same as TodoItemProps
