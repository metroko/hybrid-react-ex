import {useState} from 'react';

const UserGreeting = () => {
  return <p>Hello, logged in user</p>;
};

const GuestGreeting = () => {
  return <p>Hello, not-logged-in user</p>;
};

const Greeting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      {!isLoggedIn && (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
      {/* toinen tapa, toggle-nappula (huom. jsx:n sisällä oleva kommentti)*/}
      <button
        onClick={() => {
          // kommentit toimii normaalisti koodin sisällä
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        {isLoggedIn ? 'Log out' : 'Login'}
      </button>
    </>
  );
};

export default Greeting;