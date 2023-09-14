import { useState } from 'react';
import Button from '../../ui/Button';
function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
       className='my-[10px] border-[1px] border-stone-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-[60%] pl-2 rounded h-8 sm:w-[20%]'
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div className='sm:w-[50%] m-auto'>
          <Button type='primary'>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
