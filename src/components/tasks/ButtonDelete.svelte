<script lang="ts">
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
   
    export let id: string; // Передаваемый параметр (id задачи)
    let isLoading = false;
    let error: string | null = null;
    // Создаем диспетчер события
    const dispatch = createEventDispatcher();
  
    // Функция для обработки нажатия на кнопку
    async function handleDelete() {
      console.log(`Удаление задачи с id=${id}`);
      isLoading = true;
      error = null;
      try {
    const response = await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    // alert('Запрос DELETE успешно выполнен');
    // Отправляем событие "delete" с id задачи
    dispatch('delete', { id });
    } catch (err) {
      error = err instanceof Error ? err.message : 'Неизвестная ошибка';
    } finally {
      isLoading = false;
    }
    }

 
  </script>
  
  <!-- Разметка компонента -->
  <div class="flex flex-col items-center space-y-4">
    <button
      on:click={handleDelete}
      class="  btn btn-red"
      disabled={isLoading}
    >
      {isLoading ? 'Удаление...' : 'Удалить'}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4">
        <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
      </svg>
      
      
    </button>
    
    {#if error}
      <div class="text-red-500">Ошибка: {error}</div>
    {/if}
  </div>
  
  <style>
    /* Дополнительные стили, если Tailwind CSS не покрывает все потребности */
  </style>
  