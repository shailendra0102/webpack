import * as React from 'react';
import { render } from 'react-dom';
import { Welcome } from './welcome';
import { Users } from './users';
import { Contact } from './contact';
import '../node_modules/todomvc-common/base.css';
import '../node_modules/todomvc-app-css/index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import( './async' ).then( ( data ) => {
  console.log( data );
} );

const routing = (
  <Router>
    <div>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Route exact path="/" component={Welcome} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)

render(routing, document.getElementById('main'))

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     render(element, document.getElementById('main'));
//   }
  
//   setInterval(tick, 1000);