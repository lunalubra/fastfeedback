import { Box, Divider, Heading, Text } from "@chakra-ui/core";
import { format, parseISO } from "date-fns";
import React from "react";

const Feedback = ({ author, text, createdAt }) => (
    <Box borderRadius={4} maxWidth="700" w="full">
        <Heading size="sm" as="h3" mb={0} color="gray.900" frontWeigth="medium">
            {author}
        </Heading>
        <Text color="gray.500" mb={4} fontSize="xs">
            {format(parseISO(createdAt), "PPp")}
        </Text>
        <Text color="gray.800">{text}</Text>
        <Divider borderColor="gray.200" backgroundColor="gray.200"></Divider>
    </Box>
);

export default Feedback;
