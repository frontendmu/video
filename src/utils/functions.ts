import { clsx, ClassValue } from "clsx";
import { twMerge } from 'tailwind-merge';

// a function that only allows a-z, A-Z, 0-9, CJK, but replace spaces with - and remove multiple - 
export function removeSpecialChars(str:  string) {
	return str.replace(/[^a-zA-Z0-9\u4E00-\u9FFF]/g, '-').replace(/-+/g, '-');
}

/**
 * Combines Tailwind classes
 * @param inputs ClassValue[]
 * @returns string
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}