<script lang="ts">
  export let text: string;
  export let date: string;

  // Функция для форматирования даты
  const formatDate = (date: Date | null | undefined) => {
    return date ? new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(new Date(date)) : '-';
  };
</script>

<div>{text}: <span class="font-semibold">{formatDate(date)}</span></div>
