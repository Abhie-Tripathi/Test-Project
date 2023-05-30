import React,{useState} from "react";

export const Context = React.createContext({
    items: "",
    setitems: ()=>{},
    cartitems: "",
    setcartitems: ()=>{}
})

const ContextProvider = (props) =>{
    const [items,setitems] = useState([])
    const [cartitems,setcartitems] = useState([])

    const setitemshandler = (item) =>{
        setitems((previtems)=>[...previtems,item])
    }

    const setcartitemshandler = (item)=>{
        setcartitems((previtems)=>[...previtems,item])
    }

    const contextvalue = {
        items:items,
        setitems:setitemshandler,
        cartitems:cartitems,
        setcartitems:setcartitemshandler
    } 
    return(
        <Context.Provider value={contextvalue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider