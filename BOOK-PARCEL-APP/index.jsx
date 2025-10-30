import ReactDOM from 'react-dom/client'
import './App.css'
function Book(){
    return(
        <div>
            <img src="https://imgs.search.brave.com/Qu3dwviQ6HGp8K4LHgVVq3vw7aBgZ8X3XbUUmNFCpbc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxVy1MV2dTRjhM/LmpwZw" width="400" alt="book image"/>
            <h3>Title: physics</h3>
            <h4>Price:$381/- </h4>
            <button>Add to Cart</button>
        </div>
    );
}
const parent= document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<Book/>);