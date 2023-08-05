import React, {useState} from "react";
import { data } from "./data";
import "./../src/index.css"

const List = () => {
  const [list, setList] = useState(data);
  console.log(list);
  const removeItem = (id) =>{
    let newPeople = list.filter(el => el.id !== id);
    setList(newPeople);
  }
  const Reload = () =>{
    setList(data);
  }
  const RemoveAll = () =>{
    setList([]);
  }
  return (
    <div>
      <ul>
        {
list.map(el => {
          const {id, nome, stato, img} = el;
          return (
            <section key={id}>
              <div className="container">
                <div className="people-list">
                  <li className="user-list">
                    <h5 className="person-info">{nome}</h5>
                    <aside className="container d-flex align-items-center justify-content-start mb-5">
                    <img src={img} alt={nome} className="person-img"/>
                    <h5 className="person-info2 text-center">{stato}</h5>
                    <button className="btn btn-danger" onClick={() => removeItem(id)}>X</button>
                    </aside>
                    
                  </li>
                  
                </div>
              </div> 
            </section>
          );
        })}
      </ul>
      <div className="mt-2 ms-5 mb-5 d-flex justify-content-center">
      <button type="button" className="btn btn-primary me-1" onClick={Reload}>reload</button>
      <button type="button" className="btn btn-danger ms-1" onClick={RemoveAll}>Remove</button>
      </div>
    </div>
  );
};

export default List;