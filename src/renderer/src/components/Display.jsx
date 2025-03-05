const Display = ({ Value }) => {
    return (
      <div className="w-full h-32 p-2">
        <div className="p-2 flex items-end justify-end border border-neutral-600 w-full h-full rounded-xl bg-neutral-800 text-white text-3xl">
          {Value}
        </div>
      </div>
    );
  };
  
  export default Display;
  