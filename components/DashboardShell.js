import React from "react";
import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Heading,
    Icon,
    Link,
    Stack,
} from "@chakra-ui/core";

import { useAuth } from "@/lib/auth";
import AddSiteModal from "./AddSiteModal";

const DashboardShell = ({ children }) => {
    const { user, signout } = useAuth();

    return (
        <Box backgroundColor="gray.100" h="100vh">
            <Flex backgroundColor="white" mb={16} w="full">
                <Flex
                    backgroundColor="white"
                    alignItems="center"
                    justifyContent="space-between"
                    py={4}
                    px={8}
                    maxW="1250px"
                    margin="0 auto"
                    w="full"
                >
                    <Flex>
                        <Icon name="logo" size="24px" mr={8} />
                        <Link mr={4}>Feedback</Link>
                        <Link>Sites</Link>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center">
                        {user && (
                            <Button
                                variant="ghost"
                                mr={2}
                                onClick={() => signout()}
                            >
                                Log Out
                            </Button>
                        )}
                        <Avatar size="sm" src={user?.photoURL} />
                    </Flex>
                </Flex>
            </Flex>
            <Flex margin="0 auto" maxWidth="1250px" direction="column" px="8">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Sites</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Flex justifyContent="space-between">
                    <Heading color="black" mb={8}>
                        My Sites
                    </Heading>
                    <AddSiteModal>+ Add Site</AddSiteModal>
                </Flex>
                {children}
            </Flex>
        </Box>
    );
};

export default DashboardShell;
