<script lang="ts">
  import { onMount } from 'svelte';
  import { actions } from 'astro:actions';
  import { formatDate } from '../../utils/lib.ts';

  import ButtonDelete from './ButtonDelete.svelte';
  import ButtonUpdate from './ButtonUpdate.svelte';
  import TaskPriority from './TaskPriority.svelte';
  import TaskStatus from './TaskStatus.svelte';
  import TaskDate from './TaskDate.svelte';
  import Alert from '../ui/Alert.svelte';
  

  export let tasks: any[];

  let error = null;

  // Переменные для фильтров
  let selectedPriority: string = 'all'; // Возможные значения: 'all', 'high', 'medium', 'low'
  let selectedStatus: string = 'all';   // Возможные значения: 'all', 'completed', 'active'

    // Отфильтрованные задачи
    let filteredTasks = tasks;

      // Функция фильтрации задач
  function filterTasks() {
    filteredTasks = tasks.filter((task) => {
      const matchesPriority =
        selectedPriority === 'all' || task.priority === selectedPriority;
      const matchesStatus =
        selectedStatus === 'all' ||
        (selectedStatus === 'completed' && task.status === 'completed') ||
        (selectedStatus === 'active' && task.status !== 'completed');
      return matchesPriority && matchesStatus;
    });
  }

  // Отслеживаем изменения tasks, чтобы обновлять фильтр
  $: filterTasks();

  onMount(() => {
    console.log('Компонент TaskList загружен');
    // Возможно, здесь нужно будет добавить логику для инициализации, если она требуется.
  });
  function handleDelete(event) {
    const taskId = event.detail.id;
    console.log(`Удаление задачи с id=${taskId}`);

    // Здесь можно добавить логику для удаления задачи из списка
    tasks = tasks.filter((task) => task.id !== taskId);
  }
</script>

<div class=" grid grid-cols-1 md:grid-cols-1 gap-3 ">
  {#if error}
    <Alert title="Ошибка" arrmsg={[error]} color="red" />
  {/if}

    <!-- Фильтры -->
    <div class="filters mb-4 flex justify-start">
      <div class="filter-group w-1/2">
        <label for="priority-filter" class="ml-4">Приоритет</label>
  
      <select bind:value={selectedPriority} on:change={filterTasks} class="form__input">
        <option value="all">Все приоритеты</option>
        <option value="high">Высокий</option>
        <option value="medium">Средний</option>
        <option value="low">Низкий</option>
      </select>
      </div>
      <div class="filter-group w-1/2 ml-5">
        <label for="priority-filter" class=" ml-4">Стутус</label>
      <select bind:value={selectedStatus} on:change={filterTasks} class="form__input  ">
        <option value="all">Все статусы</option>
        <option value="completed">Выполненные</option>
        <option value="active">Активные</option>
      </select>
      </div>
    </div>

  {#if filteredTasks.length === 0 && !error}
    <div class="text-center text-gray-500">Задачи отсутствуют</div>
  {/if}

  {#each filteredTasks as task (task.id)}
    <div key={task.id} class="task-item">
      <a href={`/tasks/${task.id}`}>
        <div class="float-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" size-2 text-purple-400 w-6 h-6 ml-2">
            <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd" />
          </svg>
        </div>
        <h6>{task.title}</h6>
      </a>

      <hr class="  mt-3 mb-2" />

      <div class="flex justify-start space-x-5 text__small">
        <TaskPriority text={task.priority} />
        <TaskStatus text={task.status} />
        <TaskDate text="Выполнить до" date={task.dueDate} />
      </div>
    </div>
  {/each}
</div>
