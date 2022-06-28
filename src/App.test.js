import { render, screen } from "@testing-library/react";
import App, { DESCRIPTION } from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

describe("App component", () => {
  const queryClient = new QueryClient();
  const MockApp = () => (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
  it("header renders", () => {
    const { container } = render(<MockApp />);
    const headerEl = container.querySelector("header");
    expect(headerEl).toBeInTheDocument();
  });
  it("footer renders", () => {
    const { container } = render(<MockApp />);
    const footerEl = container.querySelector("footer");
    expect(footerEl).toBeInTheDocument();
  });
  it("description renders", () => {
    render(<MockApp />);
    const articleEl = screen.getByText(new RegExp(DESCRIPTION, "i"));
    expect(articleEl).toBeInTheDocument();
  });
  it("main renders", () => {
    const { container } = render(<MockApp />);
    const mainEl = container.querySelector("main");
    expect(mainEl).toBeInTheDocument();
  });
});
