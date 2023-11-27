
import { useForm, Controller } from 'react-hook-form';

const AddMeal = () => {
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

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <textarea {...field} className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price:</label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => <input {...field} type="text" className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rating:</label>
          <Controller
            name="rating"
            control={control}
            render={({ field }) => <input {...field} type="number" step="0.1" className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date:</label>
          <Controller
            name="date"
            control={control}
            render={({ field }) => <input {...field} type="date" className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Distributor Name:</label>
          <Controller
            name="distributorName"
            control={control}
            render={({ field }) => <input {...field} type="text" className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Admin Email:</label>
          <Controller
            name="adminEmail"
            control={control}
            render={({ field }) => <input {...field} type="email" className="mt-1 p-2 border w-full" />}
          />
        </div>

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

export default AddMeal;
