const AppErrorState = ({
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please refresh and try again.',
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-md text-center">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <p className="mt-3 text-gray-600">{message}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
        >
          Reload page
        </button>
      </div>
    </div>
  );
};

export default AppErrorState;
