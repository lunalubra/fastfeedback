import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/core";
import Feedback from "@/components/Feedback";
import { useRouter } from "next/router";
import { useState } from "react";

import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { createFeedback } from "@/lib/db";
import { useAuth } from "@/lib/auth";

const SiteFeedback = ({ initialFeedback }) => {
    const { user } = useAuth();
    const router = useRouter();
    const [allFeedback, setAllFeedback] = useState(initialFeedback);

    const onSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            author: user.name || "Anonimous",
            authorId: user.uid,
            siteId: router.query.siteId,
            text: e.target.elements.comment.value,
            createdAt: new Date().toISOString(),
            provider: user.provider,
            status: "pending",
        };
        createFeedback(newFeedback);
        setAllFeedback([newFeedback, ...allFeedback]);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            width="full"
            maxWidth="700px"
            margin="0 auto"
        >
            <Box as="form" onSubmit={onSubmit}>
                <FormControl my={8}>
                    <FormLabel htmlFor="comment">Comment</FormLabel>
                    <Input type="comment" id="comment" />
                    <Button mt={2} type="submit" fontWeight="medium">
                        Add Comment
                    </Button>
                </FormControl>
            </Box>
            {allFeedback.map((feedback) => (
                <Feedback key={feedback.id} {...feedback} />
            ))}
        </Box>
    );
};

export async function getStaticProps({ params: { siteId } }) {
    const { feedback } = await getAllFeedback(siteId);
    console.log(feedback);

    return {
        props: {
            initialFeedback: feedback,
        },
    };
}

export async function getStaticPaths() {
    const { sites } = await getAllSites();
    const paths = sites.map((site) => ({
        params: {
            siteId: site.id.toString(),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export default SiteFeedback;
