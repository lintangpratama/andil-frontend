export default function DangerInput({ logic, msg }) {
    return (
        <>
         <div className={logic ? "hidden" : "flex mt-1"}>
          <img src="attention.svg" alt="attention-icon" className="w-4"></img>
          <p className="subparagraph validate-warning text-danger mt-0.5 ml-0.5">
            {msg}
          </p>
        </div>   
        </>
    )
}
