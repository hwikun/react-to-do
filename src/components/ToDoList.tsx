import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
	toDoSelector,
	categoryState,
	Categoris,
	newCategoris,
	toDoState,
} from '../atoms';
import CreateCategory from './CreateCategory';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
	const LS_toDos = useRecoilValue(toDoState);
	const toDos = useRecoilValue(toDoSelector);
	const [categoris, setCategoris] = useRecoilState(categoryState);
	const newCategory = useRecoilValue(newCategoris);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setCategoris(value as any);
	};

	useEffect(() => {
		localStorage.setItem('TO_DO', JSON.stringify(LS_toDos));
	}, [LS_toDos]);
	console.log(toDos);
	return (
		<div>
			<h1>{categoris}</h1>
			<hr />
			<CreateCategory />
			<select value={categoris} onInput={onInput}>
				<option value={Categoris.TO_DO}>To Do</option>
				<option value={Categoris.DOING}>Doing</option>
				<option value={Categoris.DONE}>Done</option>
				{newCategory.map((category, idx) => (
					<option value={category} key={idx}>
						{category}
					</option>
				))}
			</select>
			<CreateToDo />
			{toDos.map((toDo) => (
				<ToDo key={toDo.id} {...toDo} />
			))}
		</div>
	);
}

export default ToDoList;
