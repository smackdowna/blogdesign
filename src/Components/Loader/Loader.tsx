

const Loader = () => {
    return (
        <div className="size-10 flex gap-2 items-center justify-center mx-auto">
            <div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-sky-600"></div>
            <div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-sky-600"></div>
            <div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-sky-600"></div>
          </div>
    );
};

export default Loader;