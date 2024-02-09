import AddressSignUpForm from "./components/AddressSignUpForm";
import UserSignUpForm from "./components/UserSignUpForm";
import styles from "./page.module.sass";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Sign Up</h1>
      <AddressSignUpForm />
      <UserSignUpForm />
    </main>
  );
}
