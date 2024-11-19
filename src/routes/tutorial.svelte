
<!-- This is just code from tutorials. It will work if copied into +page.svelte -->

<script>
  import { fly } from 'svelte/transition'
  import Header from './Header.svelte'

  // from +page.server.js
	let { data } = $props();
  const { users } = data

  let name = $state("josh");
  let status = $state("OPEN")
  // state that itself depends on the value of another state
  let fullName = $derived(name + " " + "Campanella")

  function toggle() {
    status = status === 'OPEN' ? 'CLOSED' : 'OPEN'
  }

  function onclick() {
    status = "CLOSED"
  }

  function open() {
    status = "OPEN"
  }

  let formState = $state({
    answers: {},
    step: 0, 
    error: "",
  })

  $inspect(formState.step)


  const QUESTIONS = [
    {
      question: "What is your username?",
      id: "username",
      type: "text",
    },
    {
      question: "What's your birthday?",
      id: "birthday",
      type: "date",
    },
    {
      question: "What's your favorite color?",
      id: "color",
      type: "color",
    }
  ]

  function nextStep(id) {
    if (formState.answers[id]) {
      formState.step += 1
      formState.error = ""
    } else {
      formState.error = "Please fill out the form input"
    }
  }

  // will run on mount
  // $effect(() => {
  //   console.log('on mounted')
  //   return () => {
  //     // when unmounted or destroyed
  //     // or before the effect re-runs when dependent state changes
  //     console.log('on unmounted')
  //   }
  // })

  // $effect(() => {
  //   // re-runs when formState.step has changed
  //   console.log('formState', formState.step)
  //   // DON'T create state based off other state in this effect
  //   // use $derived
  //   return () => {
  //     // before effect re-runs
  //     console.log('before formState reruns', formState.step)
  //   }
  // })

</script>

<Header username={formState.answers.username} name="josh" fake_name="scott">
  <p>Header</p>
  {#snippet secondChild(username)}
    <p>Second Child username is {username}</p>
  {/snippet}
</Header>

<h2>{fullName}</h2>

<!-- bind the input value to the corresponding state -->
<input type="text" bind:value={name} class="border border-gray-400 rounded-sm"/>

<p>The store is now {status}</p>

<button type="button" onclick={toggle} class="my-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">Toggle Status</button>
<button type="button" onclick={open} class="my-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">Open Store</button>
<button type="button" {onclick} class="my-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">Close Store</button>

<h2 class="ml-8">
  <a href="/users" class="block w-fit px-2 py-4 bg-gray-200 hover:bg-gray-300 rounded-md">
    See Users
  </a>
</h2>


<!-- FORM -->
<main>
  {#if formState.step >= QUESTIONS.length}
    <p>Thank you!</p>
  {:else}
    <p>Step: {formState.step + 1}</p>
  {/if}
  {#if formState.step < 3}
    <div>
      <label for="username">username</label>
      <input type="text" id="username" bind:value={formState.answers.username} class="border border-gray-400 rounded-sm"/>
    </div>
    {#if formState.error}
      <p class="text-red-500">{formState.error}</p>
    {/if}
    <button class="my-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md" onclick={() => {
      if (formState.answers.username != "") {
        formState.step += 1
      } else {
        formState.error = "Username is empty. Please enter a username"
      }
    }}>Next</button>
  {:else if formState.step === 1}
    <p>Form is on step 2</p>
  {:else}
    <p>Form is on step > 2</p>
  {/if}
</main>

<!-- (question.id below is the key for each iteration of the loop) -->
<!-- {#each QUESTIONS as question (question.id)} -->
<!-- {#each QUESTIONS as {id, question, type} (id)}
  {question.id}
  {@render formStep({ id, question, type })}
{/each} -->
{#each QUESTIONS as question, index (question.id)}
  {#if formState.step === index} 
    <!-- animations -->
    <div 
      in:fly={{ x: 200, duration: 200, opacity: 0 }} 
      out:fly={{ x: -200, duration: 200, opacity: 0 }}
    >
      {@render formStep(question)}  
    </div>
  {/if}
{/each}

{JSON.stringify(formState)}

<!-- inline snippet (this is just like defining another component inside of the jsx file of a react component) -->
 {#snippet formStep({ question, id, type })}
  <article>
    <div>
      <label for={id}>{question}</label>
      <input {type} {id} bind:value={formState.answers[id]} class="border border-gray-400 rounded-sm">
    </div>
    <button onclick={() => nextStep(id)}>Next Step</button>
  </article>
{/snippet}

<h1 class="mt-12">{users[0].id}</h1>
<h2>{users[0].username}</h2>

<ul>
  {#each users as user}
    <li class="mb-4">{user.username}
      <ul class="ml-4">
        {#each user.posts as post}
          <li>{post.title}</li>
        {/each}
      </ul>
    </li>
  {/each}
</ul>

