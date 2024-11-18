// import { prisma } from '$lib/server/prisma';
// import { error, fail } from '@sveltejs/kit';

// export async function load({ params }) {
//   const user = await prisma.user.findFirst({
//       where: { username: params.user },
//       include: {
//           posts: {
//               orderBy: { createdAt: 'desc' }
//           }
//       }
//   });

//   if (!user) {
//       throw error(404, 'User not found');
//   }

//   return {
//       user,
//       posts: user.posts
//   };
// }

// export const actions = {
//   createPost: async ({ request, params }) => {
//       const formData = await request.formData();
//       const title = formData.get('title');
//       const content = formData.get('content');

//       try {
//           const user = await prisma.user.findFirst({
//               where: { username: params.user }
//           });

//           if (!user) {
//               return fail(404, { error: 'User not found' });
//           }

//           const post = await prisma.post.create({
//               data: {
//                   title,
//                   content,
//                   authorId: user.id
//               }
//           });

//           return { success: true, post };
//       } catch (err) {
//           console.error('Error creating post:', err);
//           return fail(500, { error: 'Could not create post' });
//       }
//   }
// };