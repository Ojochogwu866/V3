import Articles from '@/lib/articles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const ArticlesEcrits = ({}) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Articles />
		</QueryClientProvider>
	);
};

export default ArticlesEcrits;
