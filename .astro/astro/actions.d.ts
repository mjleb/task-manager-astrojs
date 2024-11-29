declare module "astro:actions" {
	type Actions = typeof import("/home/mjleb/mnt/Projects/Demo/Astro/task-manager-astrojs/src/actions")["server"];

	export const actions: Actions;
}