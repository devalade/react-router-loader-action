import Root from './routes/root';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
