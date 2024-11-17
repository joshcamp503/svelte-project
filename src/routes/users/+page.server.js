import { prisma } from '$lib/server/prisma';

export async function load() {
  const users = await prisma.user.findMany({
      include: {
          posts: true
      }
  });
  
  return { users };
}

export const actions = {
  createUser: async ({ request }) => {
      const formData = await request.formData();
      const username = formData.get('username');

      try {
          const user = await prisma.user.create({
              data: {
                  username
              }
          });

          return { success: true, user };
      } catch (err) {
          console.error('Error creating user:', err);
          return fail(500, { error: 'Could not create user' });
      }
  }
};