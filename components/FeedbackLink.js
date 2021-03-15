import { Flex, Link } from "@chakra-ui/core";
import React from "react";

const FeedbackLink = () => {
    return (
        <Flex justifyContent="space-between" mb={8} width="full" mt={1}>
            <Link fontWeight="bold" fontSize="sm" href={`/p/${siteId}`}>
                {`Leave a comment ->`}
            </Link>
            <Link fontSize="xs" color="blackAlpha.500" href="/">
                Powered by Fast Feedback
            </Link>
        </Flex>
    );
};

export default FeedbackLink;
