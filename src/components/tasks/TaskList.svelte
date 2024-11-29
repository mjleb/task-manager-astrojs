<script  lang="ts">
    import { onMount } from "svelte";
    import { actions } from "astro:actions";
    import {formatDate} from "../../utils/lib.ts"
  
    import ButtonDelete from './ButtonDelete.svelte';
    import ButtonUpdate from './ButtonUpdate.svelte';
    
  
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
  
 
  
  <div class="task-list">
 
    {#if error}
      <p class="error">Ошибка: {error}</p>
    {/if}
  
    {#if tasks.length === 0 && !error}
      <div class="text-center  text-gray-500 ">Задачи отсутствуют</div>
    {/if}
  
    {#each tasks as task (task.id)}
    <div key={task.id} class="task-item" >
         
            <a href={`/tasks/${task.id}`} >
              <div class="float-end"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" size-2 text-purple-400 w-6 h-6 ml-2">
              <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd" />
            </svg></div>
              <h6 >{task.title}  </h6> 
            </a>

            <hr class="  mt-3 mb-1">
            <div class="flex justify-start space-x-5 text__small">
              <div  >
                Выполнить до:
                <span class="font-bold">{task.dueDate ? task.dueDate.toLocaleDateString() : "-"}</span>
              </div>
              
            <div  >
              <span  >Приоритет:</span>
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
            </div>
            <div >
              <span >Статус:</span>
              <span
                class={`${
                  task.status === "active"
                    ? "text-blue-500"
                    : "text-green-500"
                } font-bold`}
              >
                {task.status}
              </span>
            </div>
    
          </div>
         
            <!-- p class=" ">
              <span class="text__small">Описание:</span><br />
              {task.description || "Нет описания"}
            </p -->

            <!-- div class="text__small mb-5"> userId:  {task.userId}  </div -->
            <!-- div class="flex w-full justify-between mt-3">
              <ButtonDelete id={task.id}  on:delete={handleDelete} />
              <ButtonUpdate id={task.id}   />
            </div -->
            <!-- hr class="mt-3 mb-3">
            <div class="flex justify-between space-x-5 text__sm  text__small">
              <div class="text__small" >id: {task.id}</div>
              <div> Создана: <span class="font-semibold">{ formatDate(task.createdAt) }</span></div>
              <div> Обновлена: <span class="font-semibold">{ formatDate(task.updatedAt) }</span></div>
            </div -->
          </div>
 
    {/each}
  </div>
  