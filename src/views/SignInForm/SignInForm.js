import { VioletBtn } from "@components/buttons";
import { BlogApi } from "@services";
import useAuth from "@hooks/useAuth";

export default function SignInForm() {
  const blogApi = BlogApi();
  const { signIn } = useAuth();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;

      const token = await blogApi.signIn(username, password);
      console.log("token ", token);
      signIn(token);
    } catch (err) {
      throw Error("Error in the login");
    }
  }

  return (
    <>
      <h1>Sign In Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            minLength="2"
            maxLength="100"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="7"
            required
          />
        </div>

        <VioletBtn type="submit">Submit</VioletBtn>
      </form>
    </>
  );
}
