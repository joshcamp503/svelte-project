<script>
  let users = $state(["steve", "tim", "bob"])
  let user = $state("")
  const handleClick = (e) => {
    user = e.target.textContent
  }
  $effect(() => {
    if (user == "") user = "<current user>"
  })
  const handleClear = () => {
    user = ""
  }
</script>

<h1 class="text-red-500 text-4xl p-4">USERS</h1>
<div class="p-4 max-w-xl flex flex-col items-center">
  <ul class="w-fit">
    {#each users as user}
      <li id="user">
        <button onclick={handleClick} class="my-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-md border border-gray-300 w-28 text-center">
          {user}
        </button>
      </li>
    {/each}
  </ul>
  <button onclick={handleClear} class="my-2 px-4 py-2 bg-red-200 hover:bg-red-300 cursor-pointer rounded-md border border-gray-300 w-20 text-center">
    clear
  </button>
</div>
<div>
  <h2>Current User:</h2>
  {user}
</div>