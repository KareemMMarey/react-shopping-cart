// redux is state management system

// فكرة تمرير المتغيرات من مكون الى مكون يحدث بها تعقيد بشكل كبير عند وجود اكثر من تداخل للمكونات
// لذلك يتم استخدام ال redux

// مكونات ال REDUX 

// Store => Holds the reducer and state
// Action => JS object talks to reducer ( and tell wich process to apply on data), this object should contains a property called type specifies action type 
// Reducer  => JS Function Return Some Data (State )
// State (Props of components like item, products, .....)
// Dispatch => Action called reducer through dispatch

// Action contains ActionCreator take type and call dispatch to reducer 
// Set Redux thunck to create actions 