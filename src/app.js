class AddressBook extends React.Component{
    constructor(props){
        super(props);
        this.handleAddItem=this.handleAddItem.bind(this);
        this.handleDeleteItem=this.handleDeleteItem.bind(this);
        this.state={
            firstName:["niki","tt"]
        }
    }
    handleAddItem(){

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
                {this.props.firstName}
            </div>
        )
    }
}

class AddItem extends React.Component{
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