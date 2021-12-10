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
export const postAnswer = (questionId, resultId, answerId) => {
  return axios.post(
    `${baseUrl}/api/answer/submit`,
    {
      question_id: questionId,
      result_id: resultId,
      answer_id: answerId,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
