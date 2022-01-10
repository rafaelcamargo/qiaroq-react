import baseResource from '@src/base/resources/base/base';
import todosResource from './todos';

describe('Todos Resource', () => {
  beforeEach(() => {
    baseResource.get = jest.fn();
  });

  it('should get todos', () => {
    todosResource.get();
    expect(baseResource.get).toHaveBeenCalled();
  });
});
