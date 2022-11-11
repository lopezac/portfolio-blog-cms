import { FormEvent, useState } from "react";
import { SecondaryFormBtn } from "src/components/buttons";
import { H1, Label, P } from "src/components/globals";
import { Form, FormRow, TextInput, PasswordInput } from "src/components/forms";
import { BlogApi } from "src/services";
import { useAuth } from "src/hooks";

export default function SignInForm() {
  const [errors, setErrors] = useState("");
  const blogApi = BlogApi();
  const { signIn } = useAuth();

  async function handleSubmit(e: FormEvent) {
    try {
      e.preventDefault();
      const target = e.target as HTMLFormElement;
      if (!target) return;
      const username = target.username.value;
      const password = target.password.value;

      const token = await blogApi.signIn(username, password);
      await signIn(token);
    } catch (err) {
      setErrors("Incorrect username or password.");
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
      <P>{errors}</P>
    </>
  );
}
