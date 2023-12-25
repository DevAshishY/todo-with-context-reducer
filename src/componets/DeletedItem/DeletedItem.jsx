import { useContext } from "react";
import { ItemsStore } from "../../strore/item.strore";


const DeletedItem = () =>{
console.log(ItemsStore);
const {deleteItemList} = useContext(ItemsStore)    
return(
    <>

    {

deleteItemList.length > 0 ? deleteItemList.map((item,index)=>(<li className="list-group-item" key={index}>{item.name}</li>)):<h3 className="noData">data not found</h3>
    }
    
    </>
)

}

export default DeletedItem;