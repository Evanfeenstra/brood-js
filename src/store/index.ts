import { writable } from 'svelte/store'

export const initialized = writable<boolean>(false)

export const connected = writable<boolean>(false)

export const account = writable(null)