<script  lang="ts">
    export let text: string; 

</script>
<div>
    Приоритет:
    <span
      class={`${
        text === "high"
          ? "bg-red-100"
          : text === "medium"
          ? "bg-yellow-100"
          : "bg-green-100"
      } font-bold rounded p-1`}
    >
      {text}
    </span>
</div>