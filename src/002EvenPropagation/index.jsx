import React from "react";
// If I click on the child then it will also bubble up to the grandparent//
// event.stopPropagation
const EventPropagation = () => {
  function handleGrandParentCLick(e) {
    e.stopPropagation();
    console.log("grandparent");
  }
  function handleParentClick(e) {
    e.stopPropagation();
    console.log("Parent");
  }
  function handleChildClick(e) {
    e.stopPropagation();
    console.log("Child");
  }

  // THis is event bubbling by default from bottom to top
  //   return (
  //     <>
  //       <div
  //         className="graprent p-3 bg-yellow-300 cursor-pointer"
  //         onClick={(e) => handleGrandParentCLick(e)}
  //       >
  //         Grandparent
  //         <div
  //           className="parent p-3 bg-green-400 cursor-pointer"
  //           onClick={(e) => handleParentClick(e)}
  //         >
  //           Parent
  //           <div
  //             className="child p-3 bg-red-400 cursor-pointer"
  //             onClick={(e) => handleChildClick(e)}
  //           >
  //             Child
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  //  capturing

  return (
    <>
      <div
        className="graprent p-3 bg-yellow-300 cursor-pointer"
        onClickCapture={(e) => handleGrandParentCLick(e)}
      >
        Grandparent
        <div
          className="parent p-3 bg-green-400 cursor-pointer"
          onClickCapture={(e) => handleParentClick(e)}
        >
          Parent
          <div
            className="child p-3 bg-red-400 cursor-pointer"
            onClickCapture={(e) => handleChildClick(e)}
          >
            Child
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPropagation;
