import "./App.css";
import {
  SignInButton,
  SignOutButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/react";

function App() {
  return (
    <>
      <h1>Welcome to the app</h1>

      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </>
  );
}

export default App;
