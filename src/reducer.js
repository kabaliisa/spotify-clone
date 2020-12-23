export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQDsdK0OjSAC20T-UbOdo32ofo4ptM7W7g4s3Oa3G5ipg3lx2_j5gC57QgKMuvTGdeYQJne7sOYpx6zTyUYnfE4mtrjR43tdPS8MZG9Lc-HzrVPIEbI07RdRP0qFZFoRdXDSWX-eFTyFvSTXvhdvqmciEIWgxbs7ANaqMhuo9Jrc2B-a"
};

const reducer = (state, action) => {
console.log(action);
     switch(action.type) {
         case 'SET_USER': 
         return {
             ...state,
             user: action.user
         };

         case 'SET_TOKEN': 
         return {
             ...state,
             token: action.token
         };

         case 'SET_PLAYLISTS': 
         return {
             ...state,
             playlists: action.playlists
         };

         case 'SET_DISCOVER_WEEKLY': 
         return {
             ...state,
             discover_weekly: action.discover_weekly
         }

         default: 
            return state;
     }
}

export default reducer;