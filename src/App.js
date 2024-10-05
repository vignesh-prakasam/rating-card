import './App.css';
import { useState } from 'react';

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [rating, setRating] = useState(false);

  const handleClick = () => {
    setShowThankYou(true);
  };

  return (
    <div className='bg-neutral-veryDarkBlue min-h-screen flex flex-col justify-center items-center font-overpass'>
      {showThankYou ? (
        <h1>Thank you for rating us { rating }!</h1>
      ) : (
        <div className=' flex flex-col  space-y-5  min-w-96 max-w-sm min-96 rounded-3xl bg-neutral-darkBlue'>
          <div className='ml-10 mt-5 w-4/5'>
            <div className="p-3 mb-5 rounded-full text-sm bg-gray-700 text-white w-10 h-10 " onClick={() => setRating(1)}>
                  <svg className="" width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
            </div>
              <h1 className='text-white text-2xl mb-5'>How did we do ?</h1>
              <p className='text-sm text-neutral-lightGrey'> Please let us know how we did with your support request. All feedback is appreciated 
                  to help us improve our offering!
              </p>
          </div>
          <div className='space-x-4 w-full flex justify-center items-center'>
            <button className={`rounded-full text-sm ${rating === 1 ? 'bg-primary-orange text-neutral-veryDarkBlue' : 'bg-gray-700 hover:bg-white'} text-white w-12 h-12 p-3  hover:text-neutral-veryDarkBlue`} onClick={() => setRating(1)}>1</button>
            <button className={`rounded-full text-sm ${rating === 2 ? 'bg-primary-orange text-neutral-veryDarkBlue' : 'bg-gray-700 hover:bg-white'} text-white w-12 h-12 p-3  hover:text-neutral-veryDarkBlue`} onClick={() => setRating(2)}>2</button>
            <button className={`rounded-full text-sm ${rating === 3 ? 'bg-primary-orange text-neutral-veryDarkBlue' : 'bg-gray-700 hover:bg-white'} text-white w-12 h-12 p-3  hover:text-neutral-veryDarkBlue`} onClick={() => setRating(3)}>3</button>
            <button className={`rounded-full text-sm ${rating === 4 ? 'bg-primary-orange text-neutral-veryDarkBlue' : 'bg-gray-700 hover:bg-white'} text-white w-12 h-12 p-3  hover:text-neutral-veryDarkBlue`} onClick={() => setRating(4)}>4</button>
            <button className={`rounded-full text-sm ${rating === 5 ? 'bg-primary-orange text-neutral-veryDarkBlue' : 'bg-gray-700 hover:bg-white'} text-white w-12 h-12 p-3  hover:text-neutral-veryDarkBlue`} onClick={() => setRating(5)}>5</button>
          </div>
          <div className='w-4/5 mx-auto'>
            <button className="rounded-2xl w-full font-bold text-md bg-primary-orange text-neutral-veryDarkBlue text-center h-10 mb-7" onClick={handleClick}>SUBMIT</button>
          </div>
        </div>
        
      )}
    </div>
  );
}

export default App;
