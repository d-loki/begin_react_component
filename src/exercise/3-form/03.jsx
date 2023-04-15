import { useForm } from 'react-hook-form';

const UserForm = ({ onSubmitUser }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        // 🦁 ajoute onSubmit en passant la fonction handleSubmit
        <form className="vertical-stack form" onSubmit={handleSubmit(onSubmitUser)}>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    id="name" {...register('name', { required: 'Ce champs est requis' })} />
            </label>
            {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
            <label htmlFor="password">
                Password
                <input
                    type="password"
                    id="password" {...register('password', {
                    required:  'Ce champs est requis',
                    minLength: {
                        value:   8,
                        message: 'Password must be at least 8 characters long',
                    },
                })} />
            </label>
            {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
            <input type="submit" value="Submit" />
        </form>
    );
};

const Form = () => {
    const onSubmitUser = (data) => {
        alert('Form submitted: ' + JSON.stringify(data));
    };
    return <UserForm onSubmitUser={onSubmitUser} />;
};

export default Form;
