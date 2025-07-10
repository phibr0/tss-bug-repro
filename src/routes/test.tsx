import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Test Route</h1>
      <Link to="/">to index</Link>
    </div>
  );
}
