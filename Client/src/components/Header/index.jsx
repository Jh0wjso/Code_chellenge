import "./styles.css"
import { GoVerified } from 'react-icons/go';
import { CiDeliveryTruck } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';

export default function Header(){
 return(
    <section className="headerBG">
        <div className="">
            <p><GoVerified />  30-DAY SATISFACTION GUARANTEE</p>
        </div>
        <div>
            <p><CiDeliveryTruck />  Free delivery on orders over $40.00</p>
        </div>
        <div>
            <p><AiOutlineHeart />  50.000+ HAPPY CUSTOMERS</p>
        </div>
        <div>
            <p><GoVerified />  100% Money Back Guarantee</p>
        </div>
    </section>
 )
}