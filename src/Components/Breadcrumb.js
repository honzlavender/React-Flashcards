const Breadcrumb = ({ currentPage, prePage, deckId }) => {

  //because we are using a breadcrumb nav so often I created an individual component with parameters
  return (
    //<div className="navigation">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <span className="oi"></span>
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>{prePage}</a>
          </li>
          <li className="breadcrumb-item active text-secondary" aria-current="page">
          {currentPage}
          </li>
        </ol>
      </nav>
    //</div>
  );
};

export default Breadcrumb;
