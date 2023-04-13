import { rest } from 'msw';

const mockData = [
  {
    "id": 1,
    "accountId": 1,
    "task": "Mock Test1",
    "completed": false
  },
  {
    "id": 2,
    "accountId": 1,
    "task": "Mock Test2",
    "completed": false
  },
  {
    "id": 3,
    "accountId": 1,
    "task": "Mock Test3",
    "completed": true
  },
];

export const handlers = [
  rest.get('http://localhost:8080/v1/todos', async (req, res, ctx) => {
    req.url.searchParams.set('accountId', '1');
    return res(ctx.json(mockData));
  })
]