import React, { useState } from "react";

const correctAnsStyle = {
   borderColor: "green",
   color: "green",
   fontWeight: "bold",
};

const wrongAnsStyle = {
   borderColor: "rgb(190, 44, 44)",
   color: "rgb(190, 44, 44)",
   fontWeight: "bold",
};

const hoverStyle = {
   borderWidth: "3px",
   borderStyle: "solid",
   borderColor: "rgb(84, 84, 84)"
};

const defaultStyle = {
   position: "relative",
   height: "auto",
   width: "100%",
   padding: "12px 15%",
   fontSize: "18px",
   backgroundColor: "white",
   borderWidth: "3px",
   borderStyle: "Solid",
   borderColor: "rgb(195, 195, 195)",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
};

const tickIcon = (
   <i
      className="bi bi-check-circle-fill"
      style={{
         position: "absolute",
         right: "4%",
         color: "green",
         fontSize: "20px",
      }}
   ></i>
);

const crossIcon = (
   <i
      className="bi bi-x-circle-fill"
      style={{
         position: "absolute",
         right: "4%",
         color: "rgb(190, 44, 44)",
         fontSize: "20px",
      }}
   ></i>
);

type OptionButtonProps = {
   thisOption: string;
   isCorrectOption: boolean;
   hasBeenSelected: null | boolean;
   handleOptionClick: Function;
   isDisabled: boolean;
}

export default function OptionButton({
   thisOption,
   isCorrectOption,
   hasBeenSelected,
   handleOptionClick,
   isDisabled,
}: OptionButtonProps) {

   const [isHovering, setIsHovering] = useState(false);

   let thisButtonStyle = {
      ...defaultStyle,
      // default style
      ...(isDisabled && isCorrectOption && correctAnsStyle),
      // if this button has been disabled, and is correct, apply green border
      // since we always highlight correct option after user selects (which disables all buttons)
      ...(hasBeenSelected && !isCorrectOption && wrongAnsStyle),
      // if this button has been selected and is wrong, apply red border
      ...(!hasBeenSelected && isHovering && hoverStyle),
      // if button has not been selected yet, and mouse hovering over, apply black border
   };

   console.log('Re-rendering button');

   return (
      <button
         style={thisButtonStyle}
         onClick={handleOptionClick}
         onMouseEnter={() => setIsHovering(true)}
         onMouseLeave={() => setIsHovering(false)}
         disabled={isDisabled}
      >

         <span>{thisOption}</span> 

         {isDisabled && isCorrectOption && tickIcon}
         {/* if this button has been disabled, and is correct, apply tick icon */}
         {hasBeenSelected && !isCorrectOption && crossIcon}
         {/* if this button has been selected and is wrong, apply cross icon*/}
      </button>
   );
}
