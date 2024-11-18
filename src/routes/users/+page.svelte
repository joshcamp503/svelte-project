<!-- src/routes/users/+page.svelte -->
<script>
  import BackToHome from '$lib/components/BackToHome.svelte';
//   let { data } = $props();
//   let { users } = data;
</script>

<!-- <div class="p-6">
  <h1 class="text-4xl mb-6">Users</h1>
  
  <ul class="space-y-4">
      {#each users as user}
          <li class="block">
              <a 
                  href="/users/{user.username}" 
                  class="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                  {user.username}
                  <span class="text-gray-500 text-sm ml-2">
                      ({user.posts.length} posts)
                  </span>
              </a>
          </li>
      {/each}
  </ul>
</div> -->

<!-- <div class="mb-8">
  <h2 class="text-2xl mb-4">Create New User</h2>
  <form method="POST" action="?/createUser" class="space-y-4">
      <div>
          <label for="username" class="block mb-2">Username:</label>
          <input
              id="username"
              name="username"
              type="text"
              required
              class="w-full p-2 border rounded"
          />
      </div>
      <button
          type="submit"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
          Create User
      </button>
  </form>
</div> -->

<BackToHome />
