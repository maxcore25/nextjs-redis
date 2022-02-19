import { useState } from 'react';
import { Image } from 'next/image';

const SearchForm = () => {
  const [hits, setHits] = useState([]);

  const search = async event => {
    const q = event.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch('/api/search?' + params);

      const result = await res.json();
      console.log(result);
      setHits(result['cars']);
    }
  };

  return (
    <>
      <div>
        <h1>Find a car</h1>
        <input onChange={search} type='text' />
      </div>
      <ul>
        {hits.map(hit => (
          <li key={hit.entityId}>
            {/* <Image
              src={`${hit.image}`}
              alt='Picture of the author'
              width={500}
              height={500}
            /> */}
            {/* <Image src={hit.image} alt='car' /> */}
            {hit.make} - {hit.model}
            <p>{hit.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchForm;
