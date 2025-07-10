import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
  ssr: false,
  beforeLoad: ({ context }) => {
    console.log("/test", context);
  },
});

function RouteComponent() {
  return (
    <div>
      <h1>Test Route</h1>
      <Link to="/">to index</Link>
    </div>
  );
}
