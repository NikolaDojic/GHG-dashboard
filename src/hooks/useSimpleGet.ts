import { useQuery } from "react-query";

const useSimpleGet = (type: string, url: string) =>
  useQuery([type, url], async () => (await fetch(url)).json());

export default useSimpleGet;
