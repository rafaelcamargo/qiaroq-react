import '@testing-library/jest-dom';
import regeneratorRuntime from 'regenerator-runtime';
import { setLogger } from 'react-query';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {}
});
