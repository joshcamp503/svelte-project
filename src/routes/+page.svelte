<div class="bg-sky-100 min-h-screen flex items-center justify-center">
  <div id="card">
    <h1 class="mb-8 text-amber-700 text-3xl font-bold">Log In</h1>
    <div id="form-container">
      <form method="POST" action="?/createUser">
        <div class="flex flex-col gap-4 items-center">
          <label>
            <input 
              type="text" 
              name="username"
              placeholder="username"
              class="px-4 py-2 rounded-md"
            >
          </label>
          <label>
            <input 
              type="email" 
              name="email"
              placeholder="email"
              class="px-4 py-2 rounded-md"
            >
          </label>
          <button class="mt-4 w-24 bg-blue-200 text-amber-700 rounded-md px-4 py-2">Log In</button>
        </div>
      </form>
    </div>
  </div>
</div>