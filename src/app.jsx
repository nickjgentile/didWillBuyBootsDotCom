import React from 'react';
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        // BINDINGS HERE

        //STATE HERE
        this.state = {
            propOne: null
        };
    }
    
    // FUNCTIONS and VARS HERE 

    render() {
        return (
            <div>
                <Header />

                <Footer />
            </div>
        );
    }
}

export default App;