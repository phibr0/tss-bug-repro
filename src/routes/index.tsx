import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <h1>Index Route</h1>
      <Link to="/test">to test</Link>
    </div>
  );
}
