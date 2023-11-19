
const Row = ({id,title,status}) => {

  return (
    <div style={{display:"flex", justifyContent:"space-around",alignItems:"center"}}>
        <h6>{id}</h6>
        <button>{title}</button>
        <button>{status ? "Completed":"Not Completed"}</button>
        <button>Edit</button>
        <button>Delete</button>
        

    </div>
  )
}
export default Row