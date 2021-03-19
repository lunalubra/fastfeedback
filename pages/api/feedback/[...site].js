import { getAllFeedback } from "@/lib/db-admin";

export default async (req, res) => {
    try {
        const [siteId, route] = req.query.site;
        const { feedback } = await getAllFeedback(siteId, route);

        res.status(200).json({ feedback });
    } catch (error) {
        res.status(500).json({ error });
    }
};
