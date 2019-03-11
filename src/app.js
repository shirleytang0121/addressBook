class AddressBook extends React.Component{
    constructor(props){
        super(props);
        this.handleAddItem=this.handleAddItem.bind(this);
        this.handleDeleteItem=this.handleDeleteItem.bind(this);
        this.state={
            firstName:["niki","tt"]
        }
    }
    handleAddItem(firstName){
       this.setState((prevState)=>{
           return{
               firstName:prevState.firstName.concat(firstName)
           }
       })

    }
    handleDeleteItem(){

    }
    render(){
        return(
            <div>
                <ShowItem   firstName={this.state.firstName}/>
                <AddItem  handleAddItem={this.handleAddItem}/>
            </div>
        )
    }
}

class ShowItem extends React.Component{
    render(){
        return(
            <div>
                {this.props.firstName.map((firstName)=><p key={firstName}>Name:{firstName}</p>)}
            </div>
        )
    }
}

class AddItem extends React.Component{
    constructor(props){
        super(props);
        this.handleAddItem=this.handleAddItem.bind(this);
    }
    handleAddItem(e){
        e.preventDefault();

        const firstName=e.target.elements.firstName.value.trim();
        if(firstName){
            this.props.handleAddItem(firstName);
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleAddItem}>
                    <input type='text' name='firstName'/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<AddressBook/>,document.getElementById("app"))