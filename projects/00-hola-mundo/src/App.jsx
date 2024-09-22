import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const fomatUserName = (username) => `@${username}`;

  return (
    <section className="App">
      <TwitterFollowCard
        fomatUserName={fomatUserName}
        username="paulidev"
        name="Paula Alvarez"
      />
      <TwitterFollowCard
        fomatUserName={fomatUserName}
        username="midudev"
        name="Miguel Anguel Duran"
      />
      <TwitterFollowCard
        fomatUserName={fomatUserName}
        username="todocode"
        name="Todo code"
      />
    </section>
  );
}
