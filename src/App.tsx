import { useEffect, useState } from "react";
import { Flex } from "./components/CommonStyled";
import CountrySelect from "./components/CountrySelect";
import Header from "./components/Header";
import IntervalSelect from "./components/IntervalSelect";
import ProductsSelect from "./components/ProductsSelect";
import { DEFAULT } from "./const";
import { TError, TProduct } from "./types";
import Charts from "./components/Charts";
import useSimpleGet from "./hooks/useSimpleGet";
import { API } from "./config";
import useGetAllData from "./hooks/useGetAllData";
import RequestHandler from "./components/RequestHandler";
import Footer from "./components/Footer";

export const DESCRIPTION = `Plan A helps companies monitor, reduce, and offset their carbon footprint,
  based on the data they input about their emissions. Though this gives individual companies visibility
  on their own emissions, it doesn’t give us a clear idea on our progress on a country level. This task
  addresses the other side of the problem; using satellite data to estimate the amount of GHG emissions
  in the atmosphere over time to measure our actual impact.`;

const App = (): JSX.Element => {
  const [selectedInterval, setSelectedInterval] = useState(DEFAULT.INTERVAL);
  const [country, setCountry] = useState(DEFAULT.COUNTRY);
  const [productNames, setProductNames] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(
    DEFAULT.SELECTED_PRODUCTS
  );
  const {
    isFetching: isFetchingProducts,
    data: products,
    error: productsError,
  } = useSimpleGet("getProducts", API.products());

  useEffect(() => {
    products &&
      setProductNames(products.map((product: TProduct) => product.name));
  }, [products]);

  const allData = useGetAllData({
    products: productNames,
    interval: selectedInterval,
    country,
    enabledProducts: selectedProducts,
  });

  return (
    <>
      <Header />
      <main>
        <article>{DESCRIPTION}</article>
        <Flex media769={{ direction: "column" }}>
          <CountrySelect selectedCountry={country} setCountry={setCountry} />
          <IntervalSelect
            selectedInterval={selectedInterval}
            setSelectedInterval={setSelectedInterval}
          />
        </Flex>
        <RequestHandler
          isLoading={isFetchingProducts}
          errorMessage={(productsError as TError)?.message}
        >
          <ProductsSelect
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
            products={products}
          />
        </RequestHandler>
        <Charts data={allData} interval={selectedInterval} />
      </main>
      <Footer />
    </>
  );
};

export default App;
