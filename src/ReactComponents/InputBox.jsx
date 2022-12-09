const InputBox = ({ input, SetInputData }) => {
  return (
    <div className="inputBox">
      <input
        type="text"
        value={input}
        placeholder="&#128269; Please enter the name"
        onChange={SetInputData}
      />
    </div>
  );
};

export default InputBox;
