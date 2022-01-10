import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, waitFor } from '@testing-library/react';
import todosResource from '@src/todo/resources/todos';
import todosMock from '@src/todo/mocks/todos';
import { TodoList } from './todo-list';

describe('Todo List', () => {
  function mount(){
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        }
      }
    });
    return render(
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>
    );
  }

  beforeEach(() => {
    todosResource.get = jest.fn(() => {
      return Promise.resolve({ data: todosMock });
    });
  });

  it('should show a loading message on fetch', () => {
    todosResource.get = jest.fn(() => ({ then: () => {} }));
    const { getByText } = mount();
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should remove loading message on fetch success', async () => {
    const { queryByText } = mount();
    await waitFor(() => {
      expect(queryByText('Loading...')).not.toBeInTheDocument();
    });
  });

  it('should render a todo list on fetch success', async () => {
    const { getByText } = mount();
    await waitFor(() => {
      todosMock.forEach(todoMock => {
        expect(getByText(todoMock.title)).toBeInTheDocument();
      });
    });
  });

  it('should render an error message on fetch error', async () => {
    const errorMessage = 'Unexpected error';
    todosResource.get = jest.fn(() => Promise.reject({ message: errorMessage }));
    const { getByText } = mount();
    await waitFor(() => {
      expect(getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
