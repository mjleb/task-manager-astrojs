<script>
    import MenuTopUserInfo from '../auth/MenuTopUserInfo.svelte';
    // Функция переключения мобильного меню
    let isMenuOpen = false;
    
    const toggleMenu = () => {
      isMenuOpen = !isMenuOpen;
    };
  </script>
  
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Логотип -->
        <div class="flex flex-col items-start w-auto">
          <span class="text-xl font-bold text-gray-900">ToDo DEMO</span>
          <span class="text-sm text-gray-500">Astro js</span>
        </div>
  
        <!-- Десктопное меню -->
        <div class="hidden md:flex space-x-4 justify-center flex-grow">
          <a
            href="/tasks/new"
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Добавить
          </a>
          <a
            href="/tasks"
            class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Список
          </a>
        </div>

        <!-- Иконка меню -->
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button
          class="md:hidden flex justify-end  items-center text-gray-900 hover:text-gray-700 focus:outline-none  flex-grow pr-10 "
          on:click={toggleMenu}
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <MenuTopUserInfo />
      </div>
    </div>
  
    <!-- Мобильное меню -->
    {#if isMenuOpen}
      <div class="md:hidden px-2 pt-2 pb-3 space-y-1">
        <a
          href="/tasks/new"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-200"
        >
          Добавить
        </a>
        <a
          href="/tasks"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-200"
        >
          Список
        </a>
      </div>
    {/if}
  </nav>
  