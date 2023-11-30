import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContex } from '../Providers/AuthProvider';

const AddMeal = () => {
  const { handleSubmit, register, setValue, formState: { errors }, reset } = useForm();

  const { user } = useContext(AuthContex);

  const [ingredientFields, setIngredientFields] = useState(['']);

  const addIngredientField = () => {
    setIngredientFields([...ingredientFields, '']);
  };

  const removeIngredientField = (index) => {
    const newIngredientFields = [...ingredientFields];
    newIngredientFields.splice(index, 1);
    setIngredientFields(newIngredientFields);
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();

    // Set the value of 'ingredients' in the form data
    setValue('ingredients', ingredientFields);

    // Set default values for distributor name, email, likes, and rating
    setValue('mealDistributor', user.displayName);
    setValue('email', user.email);
    setValue('likes', '0');
    setValue('rating', '0');
    

    try {
      const response = await axios.post('http://localhost:5000/allmeals', data);

      console.log(response.data);
      Swal.fire(
        'Meal Added',
        'You have Added A New Meal successfully',
        'success'
      );

      // Reset the form and ingredient fields after successful meal addition
      reset();
      setIngredientFields(['']);
    } catch (error) {
      console.error('Error adding meal:', error);
      Swal.fire(
        'Error',
        'An error occurred while adding the meal',
        'error'
      );
    }
  };

  const onAddToUpcomingClick = async (data,e) => {
    e.preventDefault();
    // Set the value of 'ingredients' in the form data
    setValue('ingredients', ingredientFields);

    // Set default values for distributor name, email, likes, and rating
    setValue('mealDistributor', user.displayName);
    setValue('email', user.email);
    setValue('likes', '0');
    setValue('rating', '0');
    

    try {
      const response = await axios.post('http://localhost:5000/upcoming', data);

      console.log(response.data);
      Swal.fire(
        'Upcoming Meal Added',
        'You have Added A New Upcoming Meal successfully',
        'success'
      );

      // Reset the form and ingredient fields after successful meal addition
      reset();
      setIngredientFields(['']);
    } catch (error) {
      console.error('Error adding meal:', error);
      Swal.fire(
        'Error',
        'An error occurred while adding the meal',
        'error'
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Meal</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Title:</label>
          <input
            type="text"
            className="mt-1 p-2 border w-full"
            {...register('title', { required: 'Meal Title is required' })}
          />
          {errors.title && <span className="text-red-500">{errors.title.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Category:</label>
          <select
            className="mt-1 p-2 border w-full"
            {...register('category', { required: 'Meal Category is required' })}
          >
            <option>Select A Meal Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          {errors.category && <span className="text-red-500">{errors.category.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Image URL:</label>
          <input
            type="text"
            className="mt-1 p-2 border w-full"
            {...register('imageUrl')}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Meal Cover Image URL:</label>
          <input
            type="text"
            className="mt-1 p-2 border w-full"
            {...register('mealImage')}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Ingredients:</label>
          {ingredientFields.map((ingredient, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                className="mt-1 p-2 border w-full"
                placeholder="Ingredient"
                {...register(`ingredients[${index}]`)}
                defaultValue={ingredient}
              />
              {index > 0 && (
                <button
                  type="button"
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeIngredientField(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="bg-green-500 text-white px-2 py-1 rounded"
            onClick={addIngredientField}
          >
            Add Ingredient
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            className="mt-1 p-2 border w-full"
            {...register('mealDescription')}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Price:</label>
          <input
            type="text"
            className="mt-1 p-2 border w-full"
            {...register('price')}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rating:</label>
          <input
            type="number"
            step="0.1"
            className="mt-1 p-2 border w-full"
            {...register('rating', { defaultValue: 0 })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Likes:</label>
          <input
            type="number"
            step="0.1"
            className="mt-1 p-2 border w-full"
            {...register('likes', { defaultValue: 0 })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date:</label>
          <input
            type="date"
            className="mt-1 p-2 border w-full"
            {...register('postTime')}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Distributor Name:</label>
          <input
            type="text"
            className="mt-1 p-2 border w-full"
            {...register('mealDistributor')}
            defaultValue={user.displayName}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Distributor Email:</label>
          <input
            type="email"
            className="mt-1 p-2 border w-full"
            {...register('email')}
            defaultValue={user.email}
            readOnly
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Meal
          </button>
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 ml-4 rounded"
            onClick={handleSubmit(onAddToUpcomingClick)}
          >
            Add to Upcoming
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMeal;
