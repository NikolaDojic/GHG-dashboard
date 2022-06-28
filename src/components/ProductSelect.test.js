import { render, click, fireEvent } from "@testing-library/react";
import ProductsSelect from "./ProductsSelect";

describe("ProductsSelect test", () => {
  let state = {
    selectedProducts: {
      carbonmonoxide: true,
      nitrogendioxide: true,
      ozone: false,
      methane: false,
    },
    setSelectedProducts: (products) => {
      state.selectedProducts = products;
    },
    products: [
      {
        description:
          "Dry-air mixing ratio of methane for cloud-free observations with a spatial resolution of 7x7km2 observed at about 13:30 local solar time from spectra measured by TROPOMI, total column",
        name: "methane",
        product_variable: "methane_mixing_ratio_bias_corrected",
      },
      {
        description:
          "Atmospheric content of carbon monoxide in `mol m\u00af\u00b2`, total column",
        name: "carbonmonoxide",
        product_variable: "carbonmonoxide_total_column",
      },
      {
        description:
          "Atmospheric content of ozone in `mol m\u00af\u00b2`, total column",
        name: "ozone",
        product_variable: "ozone_total_vertical_column",
      },
      {
        description:
          "Nitrogen dioxide tropospheric column with a spatial resolution of 7x3.5km2 observed at about 13:30 local solar time from spectra measured by TROPOMI, total column",
        name: "nitrogendioxide",
        product_variable: "nitrogendioxide_tropospheric_column",
      },
    ],
  };

  it("should render correct checkbox values", () => {
    const { container } = render(<ProductsSelect {...state} />);
    const inputCarbon = container.querySelector('input[name="carbonmonoxide"]');
    const inputOzone = container.querySelector('input[name="ozone"]');
    const inputNitro = container.querySelector('input[name="nitrogendioxide"]');
    const inputMethane = container.querySelector('input[name="methane"]');

    expect(inputCarbon.checked).toBe(true);
    expect(inputOzone.checked).toBe(false);
    expect(inputMethane.checked).toBe(false);
    expect(inputNitro.checked).toBe(true);
  });
  it("should toggle selected on click", async () => {
    const { container } = render(<ProductsSelect {...state} />);
    const inputCarbon = container.querySelector('input[name="carbonmonoxide"]');
    await fireEvent.click(inputCarbon);
    expect(state.selectedProducts.carbonmonoxide).toBe(false);
  });
});
