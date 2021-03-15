import Head from "next/head";
import useSWR from "swr";
import { Flex, Button, Code, Icon, Text } from "@chakra-ui/core";

import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import DashboardShell from "@/components/DashboardShell";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/components/SiteTable";
import { useAuth } from "@/lib/auth";

export default function dashboard() {
    const { user } = useAuth();
    const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher);

    if (!data) {
        return (
            <DashboardShell>
                <SiteTableSkeleton />
            </DashboardShell>
        );
    }

    return (
        <DashboardShell>
            {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
        </DashboardShell>
    );
}
