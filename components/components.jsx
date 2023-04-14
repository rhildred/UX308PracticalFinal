import { hello } from '../src/functions.js';

function Hello() {
  return (
    <section>
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>
  );
}

export { Hello };
