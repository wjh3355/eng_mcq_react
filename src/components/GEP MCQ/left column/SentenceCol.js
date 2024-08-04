import SentenceParaElement from "./SentenceParaElement";
import ExplanationElement from "./ExplanationElement";
import ReviewElement from "./ReviewElement";

import { useGEPQnContext } from "../GEPQnProvider";

export default function SentenceCol() {

   const { handleNextQnBtnClick, isNextQnBtnDisabled, isExplBtnDisabled } = useGEPQnContext();

   return (
      <div className="col-lg-8">
         <div className="card card-body mb-3">
            <SentenceParaElement />
         </div>

         <div className="d-flex gap-3 mb-2">
            <button
               className={`btn btn-primary ${isExplBtnDisabled && 'disabled'}`}
               style={{ flex: 1 }}
               data-bs-toggle="collapse"
               data-bs-target="#collapseExpl"
            >
               View Explanation
            </button>

            <button
               className="btn btn-outline-secondary"
               style={{ flex: 1 }}
               data-bs-toggle="modal"
               data-bs-target="#reviewModal"
            >
               Review
            </button>

            <button
               className={`btn btn-success ${isNextQnBtnDisabled && 'disabled'}`}
               style={{ flex: 1 }}
               onClick={handleNextQnBtnClick}
            >
               Next Question
            </button>
         </div>

         <div 
            className={`collapse ${!isExplBtnDisabled && 'show'}`} 
            id="collapseExpl"
         >
            <div><ExplanationElement /></div>
         </div>


         <div className="modal fade modal-lg" id="reviewModal">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h4 className="modal-title">
                        Review of incorrect answers
                     </h4>
                     <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal"
                     ></button>
                  </div>

                  <div className="modal-body">
                     <ReviewElement />
                  </div>
               </div>
            </div>
         </div>


      </div>
   );
}
