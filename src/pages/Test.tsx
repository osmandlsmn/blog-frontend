import * as React from "react";
import { useLoadingContext } from "react-router-loading";

const Home: React.FC = () => {
  const loadingContext = useLoadingContext();
  React.useEffect(() => {
    setTimeout(() => {
      loadingContext.done();
    }, 3000);
  }, []);
  return (
    <>
      <p>hello world</p>
    </>
  );
};

export default Home;
