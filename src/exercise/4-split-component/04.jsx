import clsx from 'clsx';
import styles from '../../styles/Exercise2.module.css';

const shoppingList = [
    {
        name:     'Carotte',
        quantity: 12,
        checked:  false,
    },
    {
        name:     'Patate',
        quantity: 11,
        checked:  false,
    },
    {
        name:     'Haricot',
        quantity: 54,
        checked:  false,
    },
];

const recipeList = [
    {
        name: 'Tarte à la carotte',
        date: '11.06.22',
    },
    {
        name: 'Purée de patate',
        date: '15.08.23',
    },
    {
        name: 'Sauce au haricot',
        date: '22.09.24',
    },
];

const Header = () => {
    return (
        <header>
            <h1>Mes recettes de cuisine !</h1>
            <p>Par BeginReact.dev</p>
        </header>
    );
};

const Badge = ({ children }) => {
    return (
        <p className={styles.badge}>{children}</p>
    );
};

const ShoppingList = () => {
    return (
        <div className={clsx(styles['flex-col'])}>
            <h2>Liste de course</h2>
            <div className={styles['shopping-list-items']}>
                {
                    shoppingList.map((item) => {
                        return (
                            <ShoppingItem
                                key={item.name}
                                name={item.name}
                                quantity={item.quantity}
                                checked={item.checked}
                            ></ShoppingItem>
                        );
                    })
                }
            </div>
        </div>
    );
};

const ShoppingItem = ({
    name,
    quantity,
    checked,
}) => {
    return (
        <div className={clsx(styles['shopping-item'], styles['bg-paper'])}>
            <div className={styles.section}>
                <p>{name}</p>
                <Badge>{quantity}</Badge>
            </div>
            <div className={styles.section}>
                <input type="checkbox" defaultChecked={checked} />
            </div>
        </div>
    );
};

const Recipes = () => {
    return (
        <div className={clsx(styles['flex-col'])}>
            <h2>Liste de recettes à faire</h2>
            <ul className={clsx(styles['flex-col'], styles['gap-2'])}>
                {
                    recipeList.map((item) => {
                        return (
                            <RecipeItem
                                key={item.name}
                                name={item.name}
                                date={item.date}
                            ></RecipeItem>
                        );
                    })
                }
            </ul>
        </div>
    );
};

const RecipeItem = ({
    name,
    date,
}) => {
    return (
        <li className={clsx(styles['flex'], styles['gap-4'])}>
            <span>{name}</span>
            <Badge>{date}</Badge>
        </li>
    );
};

const Footer = () => {
    return (
        <footer>
            <p>Create by BeginReact.dev</p>
        </footer>
    );
};

const App = () => {
    return (
        <div className={clsx(styles['container'])}>
            <Header></Header>
            <hr />
            <ShoppingList></ShoppingList>
            <hr />
            <Recipes></Recipes>
            <hr />
            <Footer></Footer>
        </div>
    );
};

export default App;
