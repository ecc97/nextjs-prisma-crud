const NotesSkeletonLoading = () => {
    return (
        <>
            {/* Notes placeholders */}
            {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="bg-slate-300 p-4 my-2 animate-pulse">
                    <div>
                        <div className="h-8 bg-slate-400 rounded mb-2 w-3/4"></div>
                        <div className="h-4 bg-slate-400 rounded mb-2"></div>
                        <div className="h-4 bg-slate-400 rounded mb-2 w-1/3"></div>
                    </div>
                    <div className="flex gap-x-2 mt-4">
                        <div className="bg-blue-400 text-white px-4 py-2 rounded-md w-12 h-10"></div>
                        <div className="bg-red-400 text-white px-4 py-2 rounded-md w-12 h-10"></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default NotesSkeletonLoading;