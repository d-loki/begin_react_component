import { useState } from 'react';

const UserForm = ({ onSubmitUser }) => {
    // const nameRef = useRef(null);
    // const passwordRef = useRef(null);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('%c HANDLE SUBMIT', 'background: #fdd835; color: #000000');
    //     const elements = event.currentTarget.elements;
    //
    //     const name = elements.name.value;
    //     const password = elements.password.value;
    //     onSubmitUser({
    //         name,
    //         password,
    //     });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('%c HANDLE SUBMIT', 'background: #fdd835; color: #000000');
    //     console.log(nameRef.current.value);
    //
    //     const name = nameRef.current.value;
    //     const password = passwordRef.current.value;
    //
    //     if (password.length < 8) {
    //         setError('Password must be at least 8 characters long');
    //         return;
    //     }
    //     setError('');
    //
    //     onSubmitUser({
    //         name,
    //         password,
    //     });
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('%c HANDLE SUBMIT', 'background: #fdd835; color: #000000');

        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        onSubmitUser({
            name,
            password,
        });
    };

    function resetError() {
        setError(null);
    }

    return (
        // 🦁 ajoute onSubmit en passant la fonction handleSubmit
        <form onSubmit={handleSubmit} className="vertical-stack form">
            <label htmlFor="name">
                Name
                {/* <input ref={nameRef} type="text" name="name" id="name" /> */}
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                />
            </label>
            <label htmlFor="password">
                Password
                {/* <input */}
                {/*     ref={passwordRef} */}
                {/*     type="password" */}
                {/*     name="password" */}
                {/*     id="password" */}
                {/*     onChange={() => resetError()} */}
                {/* /> */}

                <input
                    onChange={(e) => {
                        resetError();
                        setPassword(e.target.value);
                    }
                    }
                    value={password}
                    type="password"
                    name="password"
                    id="password"
                />
            </label>
            <span style={{ color: 'red' }}>{error}</span>
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
