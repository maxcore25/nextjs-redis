const CarForm = () => {
  const handleSubmit = async event => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);

    const res = await fetch('/api/cars', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>Brand</div>
        <input name='make' type='text' />
      </div>
      <div>
        <div>Model</div>
        <input name='model' type='text' />
      </div>
      <div>
        <div>Image</div>
        <input name='image' type='text' />
      </div>
      <div>
        <div>Description</div>
        <textarea name='description' type='text' />
      </div>

      <button type='submit'>Create Car</button>
    </form>
  );
};

export default CarForm;
