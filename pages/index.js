import Head from "next/head";
import { useAuth } from "../lib/auth";

export default function Home() {
    const auth = useAuth();
    console.log(auth.user);

    return (
        <div>
            <main>
                <h1>Fast Feedback</h1>

                <p>
                    Get started by editing <code>pages/index.js</code>
                </p>
                {auth.user ? (
                    <button onClick={(e) => auth.signout()}>Sign out</button>
                ) : (
                    <button onClick={(e) => auth.signinWithGithub()}>
                        Sign in
                    </button>
                )}
                <div>{auth?.user?.email}</div>
            </main>
        </div>
    );
}
