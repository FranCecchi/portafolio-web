import React from 'react'

const MagicButton = ({
  title, icon, position, handleClick, otherClasses
}: {
  title: string,
  icon: React.ReactNode,
  position: string,
  handleClick?: () => void,
  otherClasses?: string
}) => {
  return (
    <button className="p-[3px] relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg" />

      {/* Button content */}
      <div className={`flex items-center px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent gap-2 ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </div>
    </button>

  )
}

export default MagicButton