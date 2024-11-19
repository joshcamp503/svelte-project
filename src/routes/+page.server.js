import { prisma } from '$lib/server/prisma'
import { fail } from "@sveltejs/kit"

export async function load({ params }) {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true
      }
    })  
    return { users }
  } catch (err) {
    console.error('Error loading users:', err)
    return fail(500, { error: 'Failed to load users'})
  }
}

export const actions = {
  createUser: async ({ request }) => {
    const data = await request.formData()
    const username = data.get('username')
    const email = data.get('email')
    console.log(username)
    console.log(email)

    const user = await prisma.user.create({
      data: {
        username, 
        email
      }
    })

    return user
  }
}