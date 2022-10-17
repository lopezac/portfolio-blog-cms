export default function SignInForm() {
  return (
    <>
      <h1>Sign In Form</h1>
      <form>
        <div>
          <label for="username">Username</label>
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
          <label for="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            minLength="7"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
