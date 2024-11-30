<script  lang="ts">
    export let text: string; 

</script>
<div  >
    Статус:
    <span
      class={`${
        text === "completed"
          ? "bg-purple-100"
          : "bg-blue-100"
      } font-bold rounded p-1`}
    >
      {text}
    </span>
</div>