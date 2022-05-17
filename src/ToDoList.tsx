import { useForm } from 'react-hook-form';

interface IForm {
	email: string;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	password1: string;
	extraError?: string;
}

function ToDoList() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<IForm>({ defaultValues: { email: '@gmail.com' } });
	const onValid = (data: IForm) => {
		if (data.password !== data.password1) {
			setError(
				'password1',
				{ message: 'Password incorrect.' },
				{ shouldFocus: true },
			);
		}
	};
	console.log(errors);
	return (
		<div>
			<form
				style={{ display: 'flex', flexDirection: 'column' }}
				onSubmit={handleSubmit(onValid)}>
				<input
					{...register('email', {
						required: true,
						pattern: {
							value: /^[A-Za-z0-9._%+-]+@naver.com$/,
							message: 'Only gmail.com emails allowed',
						},
					})}
					placeholder='Email'
				/>
				<span>{errors.email?.message}</span>
				<input
					{...register('firstName', { required: 'write here' })}
					placeholder='First Name'
				/>
				<span>{errors.firstName?.message}</span>
				<input
					{...register('lastName', { required: 'write here' })}
					placeholder='Last Name'
				/>
				<span>{errors.lastName?.message}</span>
				<input
					{...register('username', {
						required: 'write here',
						minLength: 10,
						validate: {
							noNico: (value) =>
								value.includes('nico') ? 'no nico allowed' : true,
							noNick: (value) =>
								value.includes('nick') ? 'no nick allowed' : true,
						},
					})}
					placeholder='User Name'
				/>
				<span>{errors.username?.message}</span>
				<input
					{...register('password', { required: 'write here', minLength: 5 })}
					placeholder='Password'
				/>
				<span>{errors.password?.message}</span>
				<input
					{...register('password1', {
						required: 'Password is Required',
						minLength: {
							value: 5,
							message: 'Your Password is too short',
						},
					})}
					placeholder='Password1'
				/>
				<span>{errors.password1?.message}</span>
				<button>Add</button>
				<span>{errors?.extraError?.message}</span>
			</form>
		</div>
	);
}

export default ToDoList;