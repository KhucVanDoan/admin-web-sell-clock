import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getExam = (params) => {
  return axios.get(`${baseUrl}/api/exam/${params}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
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
