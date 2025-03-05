import React from 'react'
import icon from '../../../../resources/icon.png'

const TopBar = () => {
  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }

  return (
    <div
      className="w-full h-8 bg-black flex items-center justify-between pl-2"
      style={{ WebkitAppRegion: 'drag' }}
    >
      {/* App Icon */}
      <div className="flex items-center">
        <img src={icon} alt="logo" width={20} height={20} className="mr-2" />
      </div>

      {/* Control Buttons */}
      <div className="flex items-center space-x-1" style={{ WebkitAppRegion: 'no-drag' }}>
        <button
          type="button"
          onClick={handleMinimize}
          className="cursor-pointer h-8 w-8 flex items-center justify-center text-white hover:bg-neutral-700 duration-200"
        >
          &#128469;
        </button>
        <button
          type="button"
          onClick={handleClose}
          className="cursor-pointer h-8 w-8 flex items-center justify-center text-white hover:bg-red-600 duration-200"
        >
          &#x2715;
        </button>
      </div>
    </div>
  )
}

export default TopBar
