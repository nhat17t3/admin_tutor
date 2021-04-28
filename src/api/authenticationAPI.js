import {
  userAuthenticated,
  getprofile,
  updateprofile,
} from "../features/Auth/authenticationSlice";
import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:3000/Authentication`,
});

export const SignUp = async (dispatch, credentials) => {
  try {
    // api call
    // const { data } = await axiosInstance.post('/signup', credentials);
    const data = {
      token: "daylatoken",
      user: {
        id: 1,
        avatar:
          "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC",
        name: "Hoàng Long Nhật",
        phonenumber: "0369621657",
        email: "hoanglongnhat0605@gmail.com",
        password: "123456",
        address: "Hà Nội",
      },
      role: ["admin"],
    };

    dispatch(userAuthenticated(data));
  } catch {
    console.log("Error sign up!");
  }
};

export const SignIn = async (dispatch, credentials) => {
  try {
    // api call
    // const { data } = await axiosInstance.post("/signin", credentials);
    const data = {
      token: "daylatoken",
      user: {
        id: 1,
        avatar:
          "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC",
        name: "Hoàng Long Nhật",
        phonenumber: "0369621657",
        email: "hoanglongnhat0605@gmail.com",
        password: "123456",
        address: "Hà Nội",
      },
      role: ["admin"],
    };

    dispatch(userAuthenticated(data));
  } catch {
    console.log("Error sign in!");
  }
};

export const GetProfile = async (dispatch, token) => {
  try {
    // api call
    // const { data } = await axiosInstance.get("/profile", token);
    const data = {
      token: "daylatoken",
      user: {
        id: 1,
        avatar:
          "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/149732315_1354561314888250_6210238945717210689_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=6-eS9XWavNQAX-Yly7Z&_nc_ht=scontent.fdad2-1.fna&oh=0ae4221e0c1f54c10f930ef36a9c5fdc&oe=608064EC",
        name: "Hoàng Long Nhật",
        phonenumber: "0369621657",
        email: "hoanglongnhat0605@gmail.com",
        password: "123456",
        address: "Hà Nội",
      },
      role: ["admin"],
    };

    dispatch(getprofile(data));
  } catch {
    console.log("Error get profile!");
  }
};

export const UpdateProfile = async (dispatch, user) => {
  try {
    // api call
    // await axiosInstance.put(`/users/updateprofile`, user);

    // dispatch(getprofile(user));
    // GetProfile(dispatch);
    dispatch(updateprofile(user));
  } catch {
    console.log("Error update profile!");
  }
};
