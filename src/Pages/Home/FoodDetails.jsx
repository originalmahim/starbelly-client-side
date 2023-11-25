import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
          const food = useLoaderData();
          console.log(food);
          return (
          <div>
          <h1>This is food details page</h1>                    
          </div>
          );
};

export default FoodDetails;