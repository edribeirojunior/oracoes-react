import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OracoesPio from './OracoesPio';
import OracoesAgostinho from './OracoesAgostinho';
import OracoesTomas from './OracoesTomas';
import Divino from './Divino';
import Eucaristico from './Eucaristico';
import Oficio from './Oficio';
import Sacramento from './Sacramento';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import OracaoPio from './OracoesPio';
import OracaoAgostinho from './OracoesAgostinho';
import OracaoTomas from './OracoesTomas';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/oficio-da-paixao" component={Oficio} />
      <Route path="/oracao-padre-pio" component={OracaoPio} />
      <Route path="/oracao-agostinho" component={OracaoAgostinho} />
      <Route path="/oracao-tomas" component={OracaoTomas} />
      <Route path="/divino-coracao" component={Divino} />
      <Route path="/eucaristico" component={Eucaristico} />
      <Route path="/sacramento" component={Sacramento} />
    </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
