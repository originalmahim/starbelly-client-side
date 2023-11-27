
import { useForm, Controller } from 'react-hook-form';

const AddMeals = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Meal</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Title:</label>
          <Controller
            name="mealTitle"
            control={control}
            render={({ field }) => <input {...field} type="text" className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Category:</label>
          <Controller
            name="mealCategory"
            control={control}
            render={({ field }) => (
              <select {...field} className="mt-1 p-2 border w-full">
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Image URL:</label>
          <Controller
            name="mealImageUrl"
            control={control}
            render={({ field }) => <input {...field} type="text" className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Ingredients:</label>
          <Controller
            name="ingredientsName"
            control={control}
            render={({ field }) => <input {...field} type="text" className="mt-1 p-2 border w-full" />}
          />
        </div>

        {/* Add other form fields similarly */}

        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Meal
          </button>
          <button type="button" className="bg-green-500 text-white px-4 py-2 ml-4 rounded">
            Add to Upcoming
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMeals;
