import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
const Main = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "AddToStore",
      payload: data
    });
  }, [data, dispatch]);
  useEffect(() => {
    axios
      .get("https://dev.mentorclan.com/api/mentors")
      .then((response) => {
        return response.data["data"];
      })
      .then((value) => {
        setData(
          Object.keys(value).map((elem) => {
            return value[elem];
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mainPageContainer">
      <span className="title">MentorClan Seller List</span>
    </div>
  );
};
export default Main;
