import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const fomatUserName = (username) => `@${username}`;

  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing={true}
        fomatUserName={fomatUserName}
        username="paulidev"
        name="Paula Alvarez"
      />
      <TwitterFollowCard
        isFollowing={false}
        fomatUserName={fomatUserName}
        username="midudev"
        name="Miguel Anguel Duran"
      />
      <TwitterFollowCard
        isFollowing={true}
        fomatUserName={fomatUserName}
        username="todocode"
        name="Todo code"
      />
    </section>
  );
}
