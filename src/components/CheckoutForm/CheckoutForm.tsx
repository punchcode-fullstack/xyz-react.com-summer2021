import { useState } from 'react';

import useCart from '../../hooks/useCart';

import './CheckoutForm.scss';

function TextInput({
  label,
  changeHandler,
  value,
}: {
  label: any;
  changeHandler: any;
  value: any;
}) {
  return (
    <div>
      <label htmlFor=''>{label}: </label>
      <input
        type='text'
        onChange={(e) => changeHandler(e.target.value)}
        value={value}
      />
    </div>
  );
}
function CheckoutForm() {
  const { checkout, cartItems } = useCart();
  const [name, setName] = useState('John Smith');
  const [email, setEmail] = useState('johnsmith@example.com');
  const [street1, setStreet1] = useState('123 Main St');
  const [street2, setStreet2] = useState('Suite 111');
  const [city, setCity] = useState('Chicago');
  const [state, setState] = useState('IL');
  const [zipcode, setZipcode] = useState('60645');

  return (
    <form>
      <TextInput label='Name' changeHandler={setName} value={name} />
      <TextInput label='Email' changeHandler={setEmail} value={email} />
      <TextInput label='Street1' changeHandler={setStreet1} value={street1} />
      <TextInput label='Street2' changeHandler={setStreet2} value={street2} />
      <TextInput label='City' changeHandler={setCity} value={city} />
      <TextInput label='State' changeHandler={setState} value={state} />
      <TextInput label='Zipcode' changeHandler={setZipcode} value={zipcode} />
      {/* <div>
          Name:{' '}
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div> */}
      <div>
        Email:{' '}
        <input
          type='text'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        Street1:{' '}
        <input
          type='text'
          onChange={(e) => setStreet1(e.target.value)}
          value={street1}
        />
      </div>
      <div>
        Street2:{' '}
        <input
          type='text'
          onChange={(e) => setStreet2(e.target.value)}
          value={street2}
        />
      </div>
      <div>
        City:{' '}
        <input
          type='text'
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
      </div>
      <div>
        State:{' '}
        <input
          type='text'
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
      </div>
      <div>
        Zipcode:{' '}
        <input
          type='text'
          onChange={(e) => setZipcode(e.target.value)}
          value={zipcode}
        />
      </div>
      <button
        aria-label='checkout'
        onClick={() =>
          checkout({
            name,
            email,
            street1,
            street2,
            city,
            state,
            zipcode,
          })
        }
        disabled={cartItems.length === 0}
      >
        Checkout
      </button>
    </form>
  );
}

export { CheckoutForm };
export default CheckoutForm;
