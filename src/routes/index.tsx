import { createFileRoute } from "@tanstack/react-router";
import { VicePage } from "@/components/vice-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <VicePage />;
}
