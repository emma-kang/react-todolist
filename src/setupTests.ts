// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('zustand');