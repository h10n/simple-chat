import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button className="btn btn-primary" formAction={login}>
          Log in
        </button>
        <button className="btn btn-secondary" formAction={signup}>
          Sign up
        </button>
      </form>
    </>
  );
}
