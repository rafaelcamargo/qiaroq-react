import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, waitFor } from '@testing-library/react';
import todosResource from '@src/todo/resources/todos';
import todosMock from '@src/todo/mocks/todos';
import { TodoView } from './todo';

describe('Todo View', () => {
  function mount(){
    const queryClient = new QueryClient();
    return render(
      <QueryClientProvider client={queryClient}>
        <TodoView />
      </QueryClientProvider>
    );
  }

  beforeEach(() => {
    todosResource.get = jest.fn(() => {
      return Promise.resolve({ data: todosMock });
    });
  });

  it('should contain a todo list', async () => {
    const { getByText } = mount();
    const [firstTodo] = todosMock;
    await waitFor(() => {
      expect(getByText(firstTodo.title)).toBeInTheDocument();
    });
  });
});
