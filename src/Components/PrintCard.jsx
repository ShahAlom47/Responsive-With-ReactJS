
import PropTypes from "prop-types";
import { FaRegCheckCircle } from "react-icons/fa";
const PrintCard = ({ data }) => {
    const {id,name, features, description, price}=data;
    return (
     
            <div className=" p-5 bg-gray-200 text-gray-800 rounded-lg flex flex-col ">
                <h1 className="text-xl font-semibold mb-2">{name}</h1>
                <p className="mb-4">{description}</p>
                <h4 className="text-lg mb-2 font-semibold ">Features:</h4>
                <ul className='flex-1'>
                {
                    features.map((feature)=><li className="flex items-start  gap-2" key={id}> <span className="mt-1"><FaRegCheckCircle /> </span>{feature}</li>)
                }
                </ul>
                <h1 className="text-2xl font-bold mt-6">Price:{price} $</h1>

            </div>
       
    );
};

export default PrintCard;

PrintCard.propTypes = {
    data: PropTypes.object.isRequired,
};