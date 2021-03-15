import { Box, Button, Heading, Text } from "@chakra-ui/core";
import React from "react";

import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => (
    <DashboardShell>
        <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
            <Heading size="md">Get feedback on your site instantly</Heading>
            <Text>Start today, then grow with us 🌳</Text>
            <Button>Upgrade to Starter</Button>
        </Box>
    </DashboardShell>
);

export default FreePlanEmptyState;
