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

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
      </svg>
      
    </button>
    
    {#if error}
      <div class="text-red-500">Ошибка: {error}</div>
    {/if}
  </div>
  
  <style>
    /* Дополнительные стили, если Tailwind CSS не покрывает все потребности */
  </style>
  