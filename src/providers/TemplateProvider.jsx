import { TemplateContext } from '../contexts/TemplateContext';

const TemplateProvider = ({ children }) => {
	const test = [];

	return (
		<TemplateContext.Provider
			value={{
				test
			}}
		>
			{children}
		</TemplateContext.Provider>
	);
};

export default TemplateProvider;
