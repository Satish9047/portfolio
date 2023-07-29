import { writable } from "svelte/store";



export const isClick = writable(false);

export function setClicked(){
    isClick.set(true);
}

export function setUnClicked(){
    isClick.set(false);
}
