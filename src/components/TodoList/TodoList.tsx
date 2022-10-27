import { FC } from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface Props {
  todoList: Todo[];
}

export const TodoList: FC<Props> = (props) => {
  const { todoList } = props;

  return (
    <section className="TodoList">
      {todoList.map((todo) => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
