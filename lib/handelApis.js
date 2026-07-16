import { api } from "./axios";
import { showError, showSuccess } from "./toaster";

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

  const handelForm = async (formData, setFormData, model, setLoader) => {
    try {
      setLoader(true);
      const { data } = await api.post("/contact", formData);
      if (data?.success) {
        showSuccess("Form submited successfully");
        setFormData(model)
        return data?.user;
      }
    } catch (err) {
      console.error(err.message);
      console.log(err.response);
      showError(err?.response?.data?.message);
    } finally {
      setLoader(false);
    }
  };

  return {
    handelGroqApi,
    handelForm,
  };
};
