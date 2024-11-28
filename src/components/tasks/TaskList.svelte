<script  lang="ts">
    import { onMount } from "svelte";
    import { actions } from "astro:actions";
  
    import ButtonDelete from './ButtonDelete.svelte';
  
    export let tasks: any[]; 
 
    let error = null;
 
    onMount(() => {
    console.log("Компонент TaskList загружен");
    // Возможно, здесь нужно будет добавить логику для инициализации, если она требуется.
  });
  function handleDelete(event) {
    const taskId = event.detail.id;
    console.log(`Удаление задачи с id=${taskId}`);

    // Здесь можно добавить логику для удаления задачи из списка
    tasks = tasks.filter(task => task.id !== taskId);
  }
</script>
  
  <style>
   .task-item {
      @apply p-4 bg-white rounded-lg shadow-md border border-gray-200 mb-3;
    }

  .text__sm {
        @apply text-sm text-gray-700;
    }
  </style>
  
  <div class="task-list">
 
    {#if error}
      <p class="error">Ошибка: {error}</p>
    {/if}
  
    {#if tasks.length === 0 && !error}
      <p>Задачи отсутствуют</p>
    {/if}
  
    {#each tasks as task (task.id)}
    <div
            key={task.id}
            class="task-item"
          >
         
            <a href={`/tasks/${task.id}`} ><h2 class="flex items-center text-2xl font-semibold">{task.title} 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-2 text-gray-400 w-6 h-6 ml-2">
              <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd" />
            </svg>
          </h2> 
            </a>
            <p class="text__sm">
              <span class="font-semibold">Описание:</span>
              {task.description || "Нет описания"}
            </p>
            
            <p class="text__sm">
              <span class="font-semibold">Приоритет:</span>
              <span
                class={`${
                  task.priority === "high"
                    ? "text-red-500"
                    : task.priority === "medium"
                    ? "text-yellow-500"
                    : "text-green-500"
                } font-bold`}
              >
                {task.priority}
              </span>
            </p>
            <p class="text__sm">
              <span class="font-semibold">Статус:</span>
              <span
                class={`${
                  task.status === "active"
                    ? "text-blue-500"
                    : "text-green-500"
                } font-bold`}
              >
                {task.status}
              </span>
            </p>
            <p class="text__sm">
              <span class="font-semibold">Срок выполнения:</span>
              {task.dueDate ? task.dueDate.toLocaleDateString() : "Не указана"}
            </p>
            <p class="text__sm"><span class="font-semibold">id:</span> {task.id}</p>
            <div class="flex w-full justify-between mt-3">
              <ButtonDelete id={task.id}  on:delete={handleDelete} />
               <a class="  btn btn-green" 
               href={`/tasks/update/${task.id}`} 
               >Редактировать 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                    <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                    <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                  </svg>
               </a>
            </div>
          </div>
 
    {/each}
  </div>
  