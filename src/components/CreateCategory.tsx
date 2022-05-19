import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { newCategoris } from '../atoms';

interface INewCategory {
	newCategory: string;
}

function CreateCategory() {
	const setNewCategory = useSetRecoilState(newCategoris);
	const { register, handleSubmit, setValue } = useForm<INewCategory>();
	const createCategory = ({ newCategory }: INewCategory) => {
		setNewCategory((oldCategory) => [...oldCategory, newCategory]);
		setValue('newCategory', '');
	};
	return (
		<form onSubmit={handleSubmit(createCategory)}>
			<input {...register('newCategory')} placeholder='create category'></input>
			<button>Create</button>
		</form>
	);
}

export default CreateCategory;
