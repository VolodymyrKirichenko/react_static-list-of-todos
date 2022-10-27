import cn from 'classnames';
import React from 'react';
import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';
import './TodoInfo.scss';

interface Props {
  todo: Todo;
}

export const TodoInfo: React.FC<Props> = (props) => {
  const {
    title,
    user,
    completed,
  } = props.todo;

  return (
    <article className={cn('TodoInfo', { 'TodoInfo--completed': completed })}>
      <input type="checkbox" checked={completed} />

      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
