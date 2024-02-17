import { create } from "zustand";
import axios, { AxiosRequestConfig } from "axios";

type State = {
  isFetching: boolean;
  error?: any;
  data: any[] | undefined;
};

type Action = {
  fetchRequest: (
    url: string,
    options?: AxiosRequestConfig<any>
  ) => Promise<void>;
};

type FetchData = {
  state: State;
  action: Action;
};

export const useFetch = create<FetchData>()((set) => ({
  state: {
    isFetching: true,
    data: undefined,
  },
  action: {
    fetchRequest: async (url: string, options?: AxiosRequestConfig<any>) => {
      await axios
        .get(url, options)
        .then((response) => {
          set(() => ({
            state: {
              data: response.data,
              isFetching: false,
            },
          }));
        })
        .catch((error) => {
          set((state) => ({
            state: {
              data: state.state.data,
              isFetching: false,
              error: error,
            },
          }));
        });
    },
  },
}));
