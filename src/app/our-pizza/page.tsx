import Image from 'next/image';

export default function ourPizza() {
  return (
    <div>
      <h1>No tricks just hard work, old school…</h1>
      <h2>Dough</h2>
      <p>
        Great pies start with great dough. You don’t need New York water, Italian four, or starter
        cultures. We keep it simple, but patience is key. Dough is made every day and left to chill
        for 2-3 days to do its thing!
      </p>
      <Image alt="Our dough balls" src="/dough.jpeg" width="700" height="400" />
      <h2>Brick Ovens</h2>
      <p>
        Our ovens are completely lined with brick, and we run &apos;em HOT! No electric motors here,
        just good ol&apos; gas power that creates a humid baking environment, perfect for pizza.
        Crispy, chewy with the right amount of char.
      </p>
      <Image
        src="/ovenPizzas.jpeg"
        alt="Half pep and half dylan pizza and a supreme pizza"
        height="300"
        width="300"
      />
      <Image src="/dylanJap.jpeg" alt="Dylan with Jalapenos" height="300" width="300" />
      <Image
        src="/meatball.jpeg"
        alt="Pizza with meatball, shredded and fresh mozzarella"
        height="300"
        width="300"
      />
      <Image
        src="/redTop.jpeg"
        alt="Pizza with meatball, shredded and fresh mozzarella"
        height="300"
        width="300"
      />
      <Image src="/pepCups.jpeg" alt="Cooked pepperoni cups on pizza" width="300" height="300" />
      <h2>Toppings</h2>
      <p>If we can, we make it ourselves. If we can’t, we use the best.</p>
      <ul>
        <li>Red sauce from USA-grown tomatoes. Fresh, light and tangy.</li>
        <li>House meatballs & buffalo chicken.</li>
        <li>The highest quality cup ‘n char pepperoni & local-made Italian sausage.</li>
        <li>100% all-natural cheese, including NUMU Vegan Mozzarella!</li>
        <li>Only the freshest produce.</li>
      </ul>
      <Image src="/closeMeatball.jpeg" alt="Close up meatball pizza" width="300" height="300" />
      <Image src="/buffChix.jpeg" alt="Buffalo chicken pizza" width="300" height="300" />
      <h2>Bonus</h2>
      <p>Don’t forget our house sides!</p>
      <ul>
        <li>Buttermilk Ranch</li>
        <li>Calabrian Chili Emulsion</li>
        <li>House cold-pickled Jalapeños</li>
        <li>House Marinara</li>
        <li>Mike’s Hot Honey</li>
      </ul>
      <Image src="/ranch.jpeg" alt="Ranch" width="300" height="300" />
      <Image src="/japs.jpeg" alt="Jalapenos" width="300" height="300" />
      <h2>Also Serving:</h2>
      <ul>
        <li>Slices</li>
        <li>Salads</li>
        <li>Garlic Knots</li>
        <li>Sodas, Beer & Wine!</li>
      </ul>
    </div>
  );
}
