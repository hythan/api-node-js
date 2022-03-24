import { jest } from '@jest/globals';

jest.unstable_mockModule('../../prisma/client.js', () => {
  return {
    __esModule: true,
    default: {
      admin: { findMany: () => [] }
    },
  };
});

const { default: prisma } = await import('../../prisma/client.js');
const { default: Admin } = await import('../../src/models/admin.js');

describe('Admin', () => {

  it('#all', async () => {

    const findMany = jest.fn().mockImplementation(() => {
      return () => [];
    });

    prisma.admin.findMany = findMany;

    const admins = await Admin.all();

    expect(findMany).toHaveBeenCalledTimes(1);
    expect(admins.length).toBe(0);
  });
});

