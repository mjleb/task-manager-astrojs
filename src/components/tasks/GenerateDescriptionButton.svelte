<!-- GenerateDescriptionButton.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
  
    let isLoading = false;
    let error = null;
    const dispatch = createEventDispatcher();
  
    async function generateDescription(title) {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.description || '';
    }
  
    async function handleClick(event) {
      event.preventDefault();
      isLoading = true;
      error = null;
      try {
        const title = document.getElementById('title').value;
        console.log('title',title);
      // Проверка, что title не пустой
      if (title.trim() === '') {
      error = 'Поле "Название задачи" не должно быть пустым.';
      return;
    }
        const result = await generateDescription(title);
        document.getElementById('description').value = result;

        // Отправляем событие, например, 'generated'
        dispatch('generated', { description: result });
      } catch (err) {
        error = err instanceof Error ? err.message : 'Неизвестная ошибка';
      } finally {
        isLoading = false;
      }
    }
  </script>
  <div>
  <button type="button" on:click={handleClick} disabled={isLoading} class=" btn btn-green">
    {#if isLoading}
      Загрузка...
    {:else}
      Сгенерировать описание
    {/if}
  </button>
  
  {#if error}
    <div style="color:red; font-size:11px"><br>{error}</div>
  {/if}
</div>
  