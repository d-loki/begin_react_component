import styles from "./01.module.css";

const VariantsStyle = {
    primary:   {
        ['--background-color']: '#646cff',
    },
    secondary: {
        ['--background-color']: '#16a34a',
    },
    default:   {
        ['--background-color']: '#171717',
    },
};

const SizesVariant = {
    small: {
        ['--padding']:   '8px 16px',
        ['--font-size']: '1rem',
    },
    large: {
        ['--padding']:   '12px 24px',
        ['--font-size']: '1.2rem',
    },
};

const Button = ({
    variant,
    size,
    children,
}) => {
    const variantStyle = VariantsStyle[variant];
    const sizeStyle = SizesVariant[size];
    return <button
        className={styles.button}
        style={{ ...variantStyle, ...sizeStyle }}
    >{children}</button>;
};

const Demo = () => {
    return (
        <div className={styles.container}>
            <Button variant="primary" size="small">
                Primary small
            </Button>
            <Button variant="secondary" size="small">
                Primary small
            </Button>
            <Button variant="default" size="small">
                Default small
            </Button>
            <Button variant="primary" size="large">
                Primary large
            </Button>
            <Button variant="secondary" size="large">
                Secondary large
            </Button>
            <Button variant="default" size="large">
                Default large
            </Button>
        </div>
    );
};

// ℹ️ Ne pas modifier le code ci-dessous
const App = () => {
    return (
        // ℹ️ Cette classe permet d'enlever les styles par défaut des boutons !
        <div className="remove-global-styles">
            <Demo />
        </div>
    );
};

export default App;
