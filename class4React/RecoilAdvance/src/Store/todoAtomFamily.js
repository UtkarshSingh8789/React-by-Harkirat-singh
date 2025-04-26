import { atomFamily } from "recoil";
import { TODOS } from "./Todos";

export const TodoAtomFamily=atomFamily({
    key:"todoAtomFamily",
    default: (id) =>{
        // it will ask about id and return the default value of that atom with specific id
        // return TODOS.find((x)=>{
        //     return x.id===id
        // })
        // another way;
        let foundTodo=null;
        for(let i=0;i<TODOS.length;i++){
            if(TODOS[i].id===id){
                foundTodo=TODOS[i];
                break;
            }
        }
        return foundTodo
    }
})// todo family will create new atom for the particualr component;

// in the todo application, if we want to get Todos from a server then we want to learn about selector family
// useRecoilStateLoadable,useRecoilValueLoadable from docs