let initalState = [
    {accountName:"Joseph",
    accountNumber:"34455545", 
    bankName: "Bank", bankBranch:
     "Acccra",
     id: "4444"
    },
    {accountName:"The manager",
    accountNumber:"000000000", 
    bankName: "The Bank", bankBranch:
     "The Branch",
     id:"sffsd"
    },
]

export default function(state = initalState, action){
    switch(action.type){
        case "ADD_ACCOUNT":
            return [...state, action.payload];
        case "DELETE_ACCOUNT":
            let accounts = state.filter(item=>{
                return item.id!==action.payload
            })
            return accounts;
        default:
            return state;
    }
}