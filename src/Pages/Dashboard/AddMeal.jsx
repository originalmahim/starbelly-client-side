
import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AuthContex } from './../Providers/AuthProvider';

const AddMeal = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const {user} = useContext(AuthContex)

  const onSubmit = (data) => {
    console.log(data);
  };
  const onAddToUpcomingClick = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Meal</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Title:</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Meal Title is required' }}
            render={({ field }) => <input {...field} type="text" className="mt-1 p-2 border w-full" />}
          />
          {errors.mealTitle && <span className="text-red-500">{errors.mealTitle.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Category:</label>
          <Controller
            name="category"
            control={control}
            rules={{ required: 'Meal Category is required' }}
            render={({ field }) => (
              <select {...field} className="mt-1 p-2 border w-full">
                <option >Select A Meal Catagory</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
            )}
          />
          {errors.mealCategory && <span className="text-red-500">{errors.mealCategory.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Image URL:</label>
          <Controller
            name="imageUrl"
            control={control}
            render={({ field }) => <input {...field} type="text" className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Cover Image URL:</label>
          <Controller
            name="mealImage"
            control={control}
            render={({ field }) => <input {...field} type="text" className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Ingredients:</label>
          <Controller
            name="ingredients"
            control={control}
            render={({ field }) => <input {...field} type="text" className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <Controller
            name="mealDescription"
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
            defaultValue={'0'}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Likes:</label>
          <Controller
            name="likes"
            control={control}
            render={({ field }) => <input {...field} type="number" step="0.1" className="mt-1 p-2 border w-full" />}
            defaultValue={'0'}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date:</label>
          <Controller
            name="postTime"
            control={control}
            render={({ field }) => <input {...field} type="date" className="mt-1 p-2 border w-full" />}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Distributor Name:</label>
          <Controller
            name="mealDistributor"
            control={control}
            render={({ field }) => <input {...field} type="text" className="mt-1 p-2 border w-full" />}
            defaultValue={user.displayName}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Distributor Email:</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <input {...field} type="email" className="mt-1 p-2 border w-full" />}
            defaultValue={user.email}
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Meal
          </button>
          <button type="button" className="bg-green-500 text-white px-4 py-2 ml-4 rounded"
          onClick={handleSubmit(onAddToUpcomingClick)}
          > Add to Upcoming
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMeal;
