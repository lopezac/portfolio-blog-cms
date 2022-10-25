import { SecondaryFormBtn } from "@components/buttons";
import { H1, Label } from "@components/globals";
import { Form, FormRow, TextInput, PasswordInput } from "@components/forms";
import { BlogApi } from "@services";
import { useAuth } from "@hooks";

export default function SignInForm() {
  const blogApi = BlogApi();
  const { signIn } = useAuth();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;

      const token = await blogApi.signIn(username, password);
      await signIn(token);
    } catch (err) {
      throw Error("Error in the login");
    }
  }

  return (
    <>
      <H1>Sign In</H1>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="username">Username</Label>
          <TextInput
            id="username"
            name="username"
            minLength="2"
            maxLength="100"
            required
          />
        </FormRow>

        <FormRow>
          <Label htmlFor="password">Password</Label>
          <PasswordInput id="password" name="password" minLength="7" />
        </FormRow>

        <SecondaryFormBtn type="submit">Submit</SecondaryFormBtn>
      </Form>
    </>
  );
}
