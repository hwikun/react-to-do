import { useForm } from 'react-hook-form';

interface IForm {
	todo: string;
}

function ToDoList() {
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const handleValid = (data: IForm) => {
		console.log('add to do', data.todo);
		setValue('todo', '');
	};

	return (
		<div>
			<form onSubmit={handleSubmit(handleValid)}>
				<input
					{...register('todo', { required: 'write here To Do' })}
					placeholder='Please enter your To Do'
				/>
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
