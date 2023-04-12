import styled from 'styled-components';

const Button = styled.button({
    // en utilisant une fonction tu vas pouvoir définir des styles conditionnellement
    // ici avec un block
    backgroundColor: (props) => {
        if (props.variant === 'primary') {
            return '#646cff';
        } else if (props.variant === 'secondary') {
            return '#16a34a';
        } else {
            return '#171717';
        }
    },
    color:           'white',
    // ici, j'utilise un ternaire pour définir la largeur du bouton en fonction
    // de la props "size"
    padding:      (props) => (props.size === 'small' ? '8px 12px' : '16px 20px'),
    border:       'none',
    borderRadius: (props) => (props.square ? '0' : '8px'),
});

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
});


const Demo = () => {
    return (
        <Container>
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
            <Button variant="secondary" size="large" square>
                Square Secondary large
            </Button>
            <Button variant="default" size="large">
                Default large
            </Button>
        </Container>
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
