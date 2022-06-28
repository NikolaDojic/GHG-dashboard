import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/lib/node";
import { QueryClient, QueryClientProvider } from "react-query";
import { API } from "../config";
import useGetAllData from "./useGetAllData";

describe("test useGetAllData hook", () => {
  const interval = "day";
  const country = "DE";
  const enabledProducts = { ozone: true, methane: false };
  const products = ["ozone", "methane"];
  const mockApis = products.map((product) => {
    return rest.get(`${API.dataStats(product)}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json([{ value: {}, time: {} }]));
    });
  });
  const server = setupServer(...mockApis);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const queryClient = new QueryClient();
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("should get response only for the selected products", async () => {
    const { result, waitFor } = renderHook(
      () => useGetAllData({ products, interval, enabledProducts, country }),
      { wrapper }
    );
    await waitFor(() => result.current.every((data) => !data.isFetching), {
      timeout: 5000,
    });
    expect(result.current.some((data) => data?.data?.product === "ozone")).toBe(
      true
    );
    expect(
      result.current.some((data) => data?.data?.product === "methane")
    ).toBe(false);
  });
});
