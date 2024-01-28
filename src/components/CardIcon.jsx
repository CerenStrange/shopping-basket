import { FaCartShopping } from "react-icons/fa6";

const CardIcon = ({cart}) => {
  return (
    <div className="relative">
       <FaCartShopping className='text-2xl'/>
       <span className=" bg-green-500 text-white w-5 h-5 
        flex justify-center align-bottom items-center
        rounded-full absolute -top-2 -right-4 text-xs">
          {cart.length}
          </span>
        </div> 
  )
}

export default CardIcon