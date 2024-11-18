// import { prisma } from '$lib/server/prisma';
// import { fail } from "@sveltejs/kit";

// // load up data from the db and return it
// export async function load() {
// 	try {
// 		const users = await prisma.user.findMany({
// 			include: {
// 					posts: true
// 			}
// 		});
//   	return { users };
// 	} catch (err) {
// 		console.error('Error loading users:', err)
// 		return fail(500, { error: 'Failed to load users' })
// 	}
  
// }

// export const actions = {
//   createUser: async ({ request }) => {
// 		const formData = await request.formData();
// 		const username = formData.get('username');

// 		if (!username) {
// 			return fail(400, {
// 				error: 'Username is required',
// 				values: { username },
// 			})
// 		}
// 		try {
// 			const user = await prisma.user.create({
// 					data: {
// 							username
// 					}
// 			});

// 			return { success: true, user };
// 		} catch (err) {
// 			console.error('Error creating user:', err);
// 			return fail(500, { error: 'Could not create user' });
// 		}
//   }
// };