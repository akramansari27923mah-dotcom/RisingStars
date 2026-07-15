import { api } from "./axios";

export const allApis = () => {
  const handelGroqApi = async (prompt) => {
    try {
      const { data } = await api.post("/customerSupport", { prompt });
      if (data?.success) {
        return data?.aiReply;
      }
    } catch (err) {
      console.error(err?.message);
    }
  };

  return {
    handelGroqApi,
  };
};
