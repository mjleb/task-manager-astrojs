<script lang="ts">
    export let title: string;
    export let arrmsg: string[];
    export let color: string;

    const alertColors: { [key: string]: string } = {
	red: ' alert_error',
	green: 'alert_success',
	high: ' text-red-500',
};
</script>

<div class={`  ${alertColors[color]}  dark:bg-opacity-45 dark:text-white  p-1 rounded-md shadow-md  mb-10`}>
    <div class="alert-${color} p-4 ">
      <div class=" flex flex-row  text-sm ">
        <div class="font-bold">
          {title}: 
        </div>
        <div class="pl-5">
            {#each arrmsg as msg  }
                <div  >
                {msg}
              </div>
            {/each}
 
        </div>
      </div>
    </div>
  </div>

