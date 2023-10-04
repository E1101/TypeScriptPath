/**
 * You can see in the highlighted code the series of object de-structuring
 * updates we have to do to update a single to-do item. This can easily lead
 * to errors and mishaps, like you changing something in the state. For example,
 * if you forget to destruct one state parameter, your code might miss important
 * updates. Another case is when you change the TodoListState interface, you
 * will have to update all the places that you destruct as well.
 *
 * Check Monocle sample file
 */

interface TodoItem {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoListState {
  allItemIds: string[];
  byItemId: { id: string; item: TodoItem };
}

interface UpdateTodoItemCompletedAction {
  type: "UPDATE_TODO_ITEM_COMPLETED";
  id: string;
  completed: boolean;
}

function reduceState(
  currentState: TodoListState,
  action: UpdateTodoItemCompletedAction
): TodoListState {
  switch (action.type) {
    case "UPDATE_TODO_ITEM_COMPLETED":
      return {
        ...currentState,
        byItemId: {
          ...currentState.byItemId,
          [action.id]: {
            ...currentState.byItemId[action.id],
            completed: action.completed,
          },
        },
      };
  }
}
