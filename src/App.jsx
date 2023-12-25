import './App.css';
import DeletedItem from './componets/DeletedItem/DeletedItem';
import Header from './componets/Header/Header';
import List from './componets/List/List';
import TodoInput from './componets/TodoInput/TodoInput';
import ToDoItemProvider from './strore/item.strore';

const App = () => {
  


  return (
    <>


<ToDoItemProvider>
        <Header />
        <div className="toApp">
          <div className="container-fluid">
            {/* input for todo */}
            <div className="row">
              <div className="col">
                <TodoInput />
              </div>
            </div>

            {/* List for added item */}
            <h6 className='mt-4'>Todo list</h6>
            <div className="row mt-4">
              <div className="col">
                <ul className="list-group">
                  <List />
                </ul>
              </div>
            </div>
            {/* List for deleted item */}
            <h6 className='mt-4'>Deleted Item</h6>
            <div className="row mt-4">
              <div className="col">
                <ul className="list-group">
                  <DeletedItem />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ToDoItemProvider>

    </>
  )
}
export default App;