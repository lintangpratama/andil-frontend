export default function DangerInput({ logic, msg, icon }) {
    return (
        <>
         <div className={logic ? "hidden" : "flex mt-1"}>
          <img src={icon} alt="attention-icon" className="w-4"></img>
          <p className="subparagraph validate-warning text-danger mt-0.5 ml-0.5">
            {msg}
          </p>
        </div>   
        </>
    )
}
