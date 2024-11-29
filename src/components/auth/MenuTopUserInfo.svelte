<script>
        import { onMount } from "svelte";

        let userId = "";

 // Функция для чтения куки
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };
  
    onMount(() => {
      // Читаем userId из куки при загрузке компонента
      userId = getCookie("userId") || "Гость";
    });
        // Функция переключения меню пользователя

    let isUserMenuOpen = false;
      const toggleUserMenu = () => {
        isUserMenuOpen = !isUserMenuOpen; 
      };
</script> 
 
       <!-- Иконка пользователя -->
        <div class="relative flex items-center">
            <!-- svelte-ignore a11y_consider_explicit_label -->
            <button
              class="flex items-center focus:outline-none"
              on:click={toggleUserMenu}
            
            >
              <svg
                class="w-8 h-8 text-gray-900 hover:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A10.95 10.95 0 0112 15c2.003 0 3.886.523 5.508 1.43M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <!-- Меню пользователя -->
            {#if isUserMenuOpen}
              <div
                class="absolute right-0 mt-20 w-max bg-white border rounded-md shadow-lg p-2 text-sm text-gray-700"
              >
                UserID: {userId}
              </div>
            {/if}
          </div> 