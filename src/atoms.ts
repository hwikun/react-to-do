import { atom, selector } from 'recoil';

export enum Categoris {
	'TO_DO' = 'TO_DO',
	'DOING' = 'DOING',
	'DONE' = 'DONE',
}

export interface IToDo {
	text: string;
	id: number;
	category: Categoris;
}

export const toDoState = atom<IToDo[]>({
	key: 'toDo',
	default: [],
});

export const categoryState = atom({
	key: 'category',
	default: Categoris.TO_DO,
});

export const toDoSelector = selector({
	key: 'toDoSelector',
	get: ({ get }) => {
		const toDos = get(toDoState);
		const category = get(categoryState);
		return toDos.filter((toDo) => toDo.category === category);
	},
});
