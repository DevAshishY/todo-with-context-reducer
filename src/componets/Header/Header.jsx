import style from './Header.module.css';
import Todo from '../../assets/images/todo.svg'

const Header = ()=>{
return(
    <>
      <header>
        <div className="container-fluid">
          <div className='row'>
            <div className='col p-3'>

              <a href='' className={style.logo}>
                <img src={Todo} alt='' title='' />
                <span>Todo</span>
              </a>

            </div>
          </div>
        </div>
      </header>
    </>
)
}

export default Header;