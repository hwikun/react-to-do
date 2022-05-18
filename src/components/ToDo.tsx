import { Categoris, IToDo, toDoState } from '../atoms';
import { useSetRecoilState } from 'recoil';
import React from 'react';

function ToDo({ text, category, id }: IToDo) {
	const setToDos = useSetRecoilState(toDoState);
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = event;
		setToDos((oldToDos) => {
			const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
			const newToDo = { text, id, category: name as any };
			return [
				...oldToDos.slice(0, targetIndex),
				newToDo,
				...oldToDos.slice(targetIndex + 1),
			];
		});
	};
	return (
		<li>
			<span>{text}</span>
			{category !== Categoris.DOING && (
				<button name={Categoris.DOING} onClick={onClick}>
					Doing
				</button>
			)}
			{category !== Categoris.TO_DO && (
				<button name={Categoris.TO_DO} onClick={onClick}>
					TO DO
				</button>
			)}
			{category !== Categoris.DONE && (
				<button name={Categoris.DONE} onClick={onClick}>
					Done
				</button>
			)}
		</li>
	);
}

export default ToDo;
