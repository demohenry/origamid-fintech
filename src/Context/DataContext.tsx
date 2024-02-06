import React, {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import useFetch from '../Hooks/useFetch';

type IDataContext = {
	data: IVenda[] | null;
	loading: boolean;
	error: string | null;
	inicio: string;
	final: string;
	setInicio: Dispatch<SetStateAction<string>>;
	setFinal: Dispatch<SetStateAction<string>>;
};

type IVenda = {
	id: string;
	nome: string;
	preco: number;
	status: 'pago' | 'processando' | 'falha';
	pagamento: 'boleto' | 'pix' | 'cartao';
	data: string;
	parcelas: number | null;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
	const context = useContext(DataContext);
	if (!context) throw new Error('useData precisa estar em DataContextProvider');
	return context;
};

function getDaysAgo(n: number) {
	const date = new Date();
	date.setDate(date.getDate() - n);

	const dateString = date.toISOString().split('T')[0];
	return dateString;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
	const [inicio, setInicio] = React.useState(getDaysAgo(20));
	const [final, setFinal] = useState(getDaysAgo(0));

	const { data, loading, error } = useFetch<IVenda[]>(
		`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
	);

	return (
		<DataContext.Provider
			value={{ data, loading, error, inicio, setInicio, final, setFinal }}
		>
			{children}
		</DataContext.Provider>
	);
};
