import React from 'react';
import './Style.css';
import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Resumo from './Pages/Resumo';
import { DataContextProvider } from './Context/DataContext';
import Vendas from './Pages/Vendas';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Venda from './Pages/Venda';

function App() {
	return (
		<BrowserRouter>
			<DataContextProvider>
				<div className='container'>
					<Sidenav />
					<main>
						<Header />
						<Routes>
							<Route />
							<Route path='/' element={<Resumo />} />
							<Route path='/vendas' element={<Vendas />} />
							<Route path='/vendas/:id' element={<Venda />} />
						</Routes>
					</main>
				</div>
			</DataContextProvider>
		</BrowserRouter>
	);
}

export default App;
