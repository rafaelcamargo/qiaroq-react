import baseResource from '@src/base/resources/base/base';

const _public = {};

_public.get = () => baseResource.get('https://jsonplaceholder.typicode.com/todos');

export default _public;
