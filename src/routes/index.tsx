import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  ssr: false,
  beforeLoad: ({ context }) => {
    console.log("/", context);
  },
});

function App() {
  return (
    <div>
      <h1>Index Route</h1>
      <Link to="/test">to test</Link>
    </div>
  );
}
