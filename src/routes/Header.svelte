<script>
  // destructure incoming props
  let { 
    name,
    fakeName = null,
    children,
    secondChild
   } = $props()
</script>

{@render children()}
<h1>Hello from {name}!</h1>
<h2>{name.replaceAll('h', 'x')}</h2>
{fakeName}
<h3>{@render secondChild(username = "test")}</h3>

{#if name === "josh"}
  <p>How's it going dude?</p>
{/if}
