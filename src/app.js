class AddressBook extends React.Component{
    constructor(props){
        super(props);
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
                <form>
                    <input type='text' name='firstName'/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<AddressBook/>,document.getElementById("app"))