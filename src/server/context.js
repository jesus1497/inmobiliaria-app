import React from 'react';

const FirebaseContext = React.createContext();

export default FirebaseContext;

export const consumerFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

/*ejemplo:

<FirebaseContext.Consumer>
    <MiComponentPrueba firebase={MiObjetoFirebase}/>   
</FirebaseContext.Consumer>

class MiComponentPrueba {
    render() {
        return (
            <div>
                hola mundo
            </div>
        );
    }
}*/