import { useContext } from 'react';
import './list.css';
import {ItemsStore} from '../../strore/item.strore';
const List = () => {

  const {tolist,deleteItem,editDataOnparent} = useContext(ItemsStore)
   const DeletedItem = (index) => {
      deleteItem(index)
   }

   const getEditIdData = (editItemData,editIndex) =>{
      editDataOnparent(editItemData,editIndex)
   }
  
   return (
      <>
         {
            tolist.length > 0 ? tolist.map((item, index) =>
            (<li className="list-group-item d-flex justify-content-between" key={index}> <span>{item.name} </span>
            <div className='iconCover'>
               <i onClick={()=> getEditIdData(item.name,index)} class="bi bi-pencil-fill">

               </i>
               <i onClick={() => DeletedItem(index,
                  )} class="bi bi-trash3-fill"></i>
               </div>

            </li>)
            ) : <h3 className='noData'>No Data</h3>
         }



      </>
   )
}
export default List