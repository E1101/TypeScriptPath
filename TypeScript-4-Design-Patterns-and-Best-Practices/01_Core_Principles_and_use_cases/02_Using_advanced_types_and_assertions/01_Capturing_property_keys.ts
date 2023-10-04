/**
 * [ keyof operator ]
 * can be used to capture all the keys of a type. You can use this operator in many places
 * especially when you want to declare as a union type out of an existing variable or type.
 *
 * Let's have an example:
 */
interface SignupFormState {
  email: string;
  name: string;
}

interface ActionPayload {
  key: keyof SignupFormState;
  value: string;
}

const update1: ActionPayload = {
  key: "email",
  value: "hello@gmail.com",
};

/*
 When you have an existing variable and you want to use keyof,
 you want to use the typeof operator to get its type first and then apply it:

 Here, typeof will query the type of the update1 variable, which is ActionPayload,
 and the keyof operator will retrieve the type keys. The benefit here is that you
 won't have to retype anything if you change the type signature of SignupFormState.
 */
type actionPayloadKeys = keyof typeof update1;
const x: actionPayloadKeys = "key";
