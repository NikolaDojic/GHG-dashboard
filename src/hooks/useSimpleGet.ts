import { useQuery } from "react-query";

const useSimpleGet = (queryKey: string, url: string) =>
  useQuery([queryKey, url], async () => (await fetch(url)).json());

export default useSimpleGet;
