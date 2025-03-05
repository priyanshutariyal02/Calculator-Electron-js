import { buttons, handleButtonClick } from '../constants/index'

const Buttons = ({ setExpression }) => {
  const handleClick = (val) => {
    setExpression((prevExp) => handleButtonClick(val, prevExp))
  }

  return (
    <div className="p-2 w-full flex-1">
      <div className="w-full h-full grid grid-cols-4 gap-2">
        {buttons.map((item) => (
          <button
            key={item}
            className={`w-full h-full rounded-xl text-white text-lg duration-150 ${item == '=' ? 'bg-green-700 hover:bg-green-800' : 'bg-neutral-800 hover:bg-neutral-700'}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Buttons
