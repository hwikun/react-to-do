import { useRecoilState, useRecoilValue } from 'recoil';
import { toDoSelector, categoryState, Categoris, newCategoris } from '../atoms';
import CreateCategory from './CreateCategory';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
	const toDos = useRecoilValue(toDoSelector);
	const [categoris, setCategoris] = useRecoilState(categoryState);
	const newCategory = useRecoilValue(newCategoris);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		setCategoris(event.currentTarget.value as any);
	};
	console.log(toDos);
	return (
		<div>
			<h1>To Dos</h1>
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
