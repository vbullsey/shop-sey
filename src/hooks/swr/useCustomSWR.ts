import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

const useCustomSWR = (fallback: string) => {
  const { data, error } = useSWR(fallback, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCustomSWR;
