import Head from "next/head";
import { Flex, Button, Code, Icon, Text } from "@chakra-ui/core";

import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";

export default function Home() {
    const auth = useAuth();

    return (
        <Flex
            as="main"
            direction="column"
            align="center"
            justify="center"
            h="100vh"
        >
            <Head>
                <title>Fast Feedback</title>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        if (document.cookie && document.cookie.includes('homa-auth')) {
                            window.location.href = "/dashboard"
                        }
                    `,
                    }}
                />
            </Head>

            <Icon name="logo" size="64px" />
            {auth.user ? (
                <Button as="a" href="/dashboard">
                    View dashboard
                </Button>
            ) : (
                <Button
                    mt={4}
                    size="sm"
                    onClick={(e) => auth.signinWithGithub()}
                >
                    Sign in
                </Button>
            )}
        </Flex>
    );
}
