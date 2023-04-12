import clsx from 'clsx';

const VariantsStyle = {
    primary:   'bg-[#646cff]',
    secondary: 'bg-[#16a34a]',
    default:   'bg-[#171717]',
};

const SizesVariant = {
    small: 'p-2 text-sm',
    large: 'p-3 text-lg',
};

const Button = ({
    variant,
    size,
    children,
    rounded = true,
}) => {
    const variantStyle = VariantsStyle[variant];
    const sizeStyle = SizesVariant[size];

    return <button className={clsx('border-0', rounded && 'rounded-md', variantStyle, sizeStyle)}>{children}</button>;
};

const Demo = () => {
    return (
        <div className="flex flex-col items-center gap-4">
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
            <Button variant="secondary" size="large" rounded={false}>
                Square Secondary large
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
