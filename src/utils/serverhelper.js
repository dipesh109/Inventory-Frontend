import { backendUrl } from "./config";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
  // console.log(route);
  const response = await fetch("https://inventorybackend-8io4.onrender.com/"+ route,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};



export const makeAuthenticatedPOSTRequest = async (route, body) => {
  try {
    const response = await fetch(backendUrl + route, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const formattedResponse = await response.json(); // Convert response to JSON

    // Check if response status is NOT OK (e.g., 401, 400, 500, etc.)
    if (!response.ok) {
      throw new Error(formattedResponse.message || "Request failed");
    }

    return formattedResponse;
  } catch (error) {
    console.error("API Error:", error);
    return { err: true, message: error.message }; // Ensure frontend knows an error occurred
  }
};


export const makeAuthenticatedGETRequest = async (route) => {
  // const token = getToken();
  const response = await fetch(backendUrl + route, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  });
  const formattedResponse = await response.json();
  return formattedResponse;
};

// const getToken = () => {
//   const accessToken = document.cookie.replace(
//     /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
//     "$1"
//   );
//   return accessToken;
// };
