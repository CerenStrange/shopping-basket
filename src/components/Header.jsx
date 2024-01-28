import { FaCartShopping } from "react-icons/fa6";
import CardIcon from "./CardIcon";

const Header = ({cart}) => {
  return (
    <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3x1 font-extrabold'>StrangeYol.com</h1>
      <div>
      <CardIcon cart={cart}/>
        </div>
    </div>
  )
}

export default Header