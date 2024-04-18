const Select = () => {
  return (
    <div className="genre">
      <select name="genre" className="btn">
        <option value="">Please, choose an genre</option>
        <option value="drama">Drama</option>
        <option value="comedy">Comedy</option>
        <option value="thriller">Thriller</option>
        <option value="action">Action</option>
        <option value="Fantasy">Fantasy</option>
        <option value="romance">Romance</option>
      </select>
    </div>
  );
};

export default Select;
