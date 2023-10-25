const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api`;

const postRequest = async (url: string, body: string) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();

  if (!response.ok) {
    let message;

    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }

  return data;
};

const getRequest = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    let message = "에러가 발생했습니다.";

    if (data?.message) {
      message = data.message;
    }

    return { error: true, message };
  }

  return data;
};

export { baseUrl, postRequest, getRequest };
