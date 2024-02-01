import React from 'react';
import ReactDOM from 'react-dom';
import Stripe from './Pages/Stripe';

function Layout() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        <Stripe />  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;

if (document.getElementById('root')) {
    ReactDOM.render(<Layout />, document.getElementById('root'));
}
