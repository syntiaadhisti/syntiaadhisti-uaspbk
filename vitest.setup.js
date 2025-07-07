import { beforeAll, vi } from 'vitest';

beforeAll(() => {
  global.alert = vi.fn();
});
