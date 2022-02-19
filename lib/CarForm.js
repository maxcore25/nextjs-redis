const CarForm = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input name='make' type='text' />
      <input name='model' type='text' />
      <input name='image' type='text' />
      <textarea name='description' type='text' />

      <button type='submit'>Create Car</button>
    </form>
  );
};

export default CarForm;
