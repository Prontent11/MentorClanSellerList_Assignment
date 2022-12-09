import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputBox from "./InputBox";
import SellerCard from "./SellerCard";
const DisplayPage = () => {
  const { data } = useSelector((state) => state.custom);
  const [input, setInput] = useState("");
  const [filterData, setFilterData] = useState("");

  const SetInputData = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    setFilterData(
      data.filter((elem) => {
        return elem.name
          .toLocaleLowerCase()
          .includes(input.toLocaleLowerCase());
      })
    );
  }, [input, data]);
  return (
    <>
      <InputBox input={input} SetInputData={SetInputData} />
      <SellerCard filterData={filterData} />
    </>
  );
};

export default DisplayPage;
