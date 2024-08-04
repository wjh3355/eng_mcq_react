export default function LoadingSpinner() {
   return (
      <div className="container mt-3">
         <div className="d-flex justify-content-center">
            <h3>Loading...</h3>
         </div>
         <div className="d-flex justify-content-center mt-3">
            <div className="spinner-border" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         </div>
      </div>
   );
}
