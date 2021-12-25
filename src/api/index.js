import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getRule = () => {
  return axios.get(`${baseUrl}/api/rules`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getCauhinh = () => {
  return axios.get(`${baseUrl}/api/cauhinhs`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteRule = (key) => {
  return axios.delete(`${baseUrl}/api/rules/${key}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getOneCauHinh = (key) => {
  return axios.get(`${baseUrl}/api/cauhinh?key=${key}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getLaptop = (params) => {
  return axios.get(`${baseUrl}/api/laptops`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const getCpu = (params) => {
  return axios.get(`${baseUrl}/api/cauhinhs`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const addRule = (key, vephai, vetrai) => {
  return axios.post(
    `${baseUrl}/api/rules`,
    {
      key: key,
      vephai: vephai,
      vetrai: vetrai,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const getketQua = (params) => {
  return axios.post(
    `${baseUrl}/api/tu-van/`,
    { gt: params },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const removeRedundant = (data) => {
  return axios.post(
    `${baseUrl}/api/rule/remove-redundant`,
    { rules: data },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const removeRedundantRule = () => {
  return axios.get(`${baseUrl}/api/remove-redundant-rule`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
