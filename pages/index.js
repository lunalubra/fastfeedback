import Head from "next/head";
import { Box, Button, Flex, Text, Icon, Link } from "@chakra-ui/core";

import { useAuth } from "@/lib/auth";
import LoginButtons from "@/components/LoginButtons";
import Footer from "@/components/Footer";

const Home = () => {
    const auth = useAuth();

    return (
        <>
            <Box bg="gray.100" py={16} px={4}>
                <Flex as="main" direction="column" maxW="700px" margin="0 auto">
                    <Head>
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/sites"
              }
            `,
                            }}
                        />
                    </Head>
                    <Icon color="black" name="logo" size="48px" mb={2} />
                    <Text mb={4} fontSize="lg" py={4}>
                        <Text as="span" fontWeight="bold" display="inline">
                            Fast Feedback
                        </Text>
                        {" was built as part of "}
                        <Link
                            href="https://react2025.com"
                            isExternal
                            textDecoration="underline"
                        >
                            React 2025
                        </Link>
                        {`. It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}
                    </Text>
                    {auth.user ? (
                        <Button
                            as="a"
                            href="/sites"
                            backgroundColor="gray.900"
                            color="white"
                            fontWeight="medium"
                            mt={4}
                            maxW="200px"
                            _hover={{ bg: "gray.700" }}
                            _active={{
                                bg: "gray.800",
                                transform: "scale(0.95)",
                            }}
                        >
                            View Dashboard
                        </Button>
                    ) : (
                        <LoginButtons />
                    )}
                </Flex>
            </Box>
            <Footer />
        </>
    );
};

export default Home;
