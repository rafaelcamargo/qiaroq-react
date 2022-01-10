import React from 'react';
import { useQuery } from 'react-query';
import todosResource from '@src/todo/resources/todos';
import { Loader } from '@src/base/components/loader/loader';

export const TodoList = () => {
  const { isLoading, error, data } = useQuery('todos', todosResource.get);

  return (
    <ul className="todo-list">
      {(isLoading ? <Loader /> : buildContent(error, data))}
    </ul>
  );
};

function buildContent(error, { data } = {}){
  return error ? <div>{error.message}</div> : data?.map(todo => <li key={todo.id}>{todo.title}</li>);
}
