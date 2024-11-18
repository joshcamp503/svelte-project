<!-- src/routes/users/[user]/+page.svelte -->
<script>
  import BackToHome from '$lib/components/BackToHome.svelte';
//   let { data } = $props();
//   let { user, posts } = data;
</script>
<!-- 
<div class="p-6">
  <h1 class="text-4xl mb-6">{user.username}'s Profile</h1>

  <div class="mb-8">
      <h2 class="text-2xl mb-4">Create a New Post</h2>
      <form method="POST" action="?/createPost" class="space-y-4">
          <div>
              <label for="title" class="block mb-2">Title:</label>
              <input
                  id="title"
                  name="title"
                  type="text"
                  required
                  class="w-full p-2 border rounded"
              />
          </div>
          <div>
              <label for="content" class="block mb-2">Content:</label>
              <textarea
                  id="content"
                  name="content"
                  required
                  class="w-full p-2 border rounded h-32"
              ></textarea>
          </div>
          <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
              Create Post
          </button>
      </form>
  </div>

  <div>
      <h2 class="text-2xl mb-4">Posts</h2>
      {#if posts.length > 0}
          <ul class="space-y-4">
              {#each posts as post}
                  <li class="border p-4 rounded">
                      <a 
                          href="/posts/{post.id}" 
                          class="text-blue-500 hover:underline text-xl"
                      >
                          {post.title}
                      </a>
                      <p class="text-gray-600 text-sm">
                          {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                  </li>
              {/each}
          </ul>
      {:else}
          <p class="text-gray-600">No posts yet.</p>
      {/if}
  </div>
</div> -->

<BackToHome />