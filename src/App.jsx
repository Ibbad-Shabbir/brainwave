import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div>WOW</div>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          something
        </Button>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
