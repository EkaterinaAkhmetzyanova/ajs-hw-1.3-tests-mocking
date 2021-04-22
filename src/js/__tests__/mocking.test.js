import fetchData from '../http';
import { getLevel } from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel call once', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('getLevel response', () => {
  fetchData.mockReturnValue('{}');
  expect(getLevel(5)).toBe('Информация об уровне временно недоступна');
});

test('getLevel response', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 100,
  });
  expect(getLevel(1)).toBe('Ваш текущий уровень: 100');
});

// test('getLevel call once', () => {
//     fetchData.mockReturnValue(JSON.stringify({}));
//     getLevel();
//     expect(fetchData).toBeCalledWith('https://server/user/1');
//   });
