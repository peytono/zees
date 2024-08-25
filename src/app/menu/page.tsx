import Image from 'next/image';

export default function Menu() {
  return (
    <main>
      <h1>Current Specials:</h1>
      <h2>Salads:</h2>
      <strong>Ceasar $10</strong>
      <p>romaine, croutons, asiago, lemon, caesar</p>
      <strong>Mediterranean Salad $12</strong>
      <p>romaine, tomato, red onion, feta, sumac, Gordal olive, peperoncini, lemon vin</p>
      <h2>Pies:</h2>
      <strong>Buffalo Chicken $24</strong>
      <p>mozz, Frank’s rosemary chicken, fresh parsley, house ranch drizzle
      <br/>{`(add bleu cheese $2)`}</p>
      <h2>Special Toppings:</h2>
      <strong>House Meatball $4 {`(pork/veal/beef)`}</strong>
      <br/>
      <strong>Bacon $3</strong>
      <br/>
      <strong>Danish Bleu Cheese $2</strong>
      <hr/>
      <br/>
      <Image src="/menu.jpeg" alt="Zee's Pizzeria Menu" height="1500" width="700" />
      <br/>
      <hr/>
    </main>
  );
}
