const Shimmer = () => {
    return (
        <>
             <div className="restraunt-list">

            {Array(10).fill('').map((e,index) =><div key="index" className="card shimmer"><h1></h1></div> )}
             </div>

             
        </>
    )
}
export default Shimmer;