import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';
import { useForm } from 'react-hook-form';

interface IForm {
	toDo: string;
}

function CreateToDo() {
	const setToDos = useSetRecoilState(toDoState);
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const handleValid = ({ toDo }: IForm) => {
		setToDos((oldToDos) => [
			{
				text: toDo,
				id: Date.now(),
				category: 'TO_DO',
			},
			...oldToDos,
		]);
		setValue('toDo', '');
	};
	return (
		<form onSubmit={handleSubmit(handleValid)}>
			<input
				{...register('toDo', { required: 'write here To Do' })}
				placeholder='Please enter your To Do'
			/>
			<button>Add</button>
		</form>
	);
}

export default CreateToDo;