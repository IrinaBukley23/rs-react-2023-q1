import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/actions/actionCreators";
import { IChar } from "../types/type";
import Card from "../components/card/card";
import Input from "../components/input/input";
import "./page.scss";
import { State } from "../store/utils";

function Home() {
  const [charList, setCharList] = useState<IChar[]>([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { search } = useSelector((state: State) => state.home);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  function getData(url: string) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharList(data.results);
        setLoading(false);
      });
  }

  useEffect(() => {
    getData(`https://rickandmortyapi.com/api/character/?name=`);
  }, [search]);

  const handleClick = () => {
    // dispatch(setSearch(""));
    getData(`https://rickandmortyapi.com/api/character/?name=${search || ""}`);
  };

  return (
    <>
      <h2 className="title">Home page</h2>
      <div className="search">
        <Input search={search} onChange={handleChange} onClick={handleClick} />
      </div>
      <div className="container">
        {loading ? <h5 className="loading">Loading...</h5> : null}
        {!loading && !charList ? (
          <h5 className="loading"> Nothing found </h5>
        ) : (
          charList.map((char: IChar) => {
            return <Card char={char} key={char.id} />;
          })
        )}
      </div>
    </>
  );
}

export default Home;
