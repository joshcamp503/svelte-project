<script>
  import { createState, JoshState } from './state.svelte'
  // destructure incoming props
  let { 
    name,
    fakeName = null,
    children,
    secondChild
   } = $props()

   const myState = createState()
   const myStateTwo = new JoshState()
</script>

{@render children()}
<h1>Hello from {name}!</h1>
<h2>{name.replaceAll('h', 'x')}</h2>
{fakeName}
<!-- <h3>{@render secondChild(username = "test")}</h3> -->

{#if name === "josh"}
  <p>How's it going dude?</p>
{/if}

<!-- <button class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md w-24" onclick={() => {
  myState.value += 10
}}>
  {myState.value}
</button> -->

<button class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md w-24" onclick={myState.up}>
  {myState.value}
</button>

<button class="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md w-24" onclick={() => myStateTwo.up()}>
  {myStateTwo.value}
</button>
