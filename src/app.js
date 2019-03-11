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

ReactDOM.render(<AddressBook/>,document.getElementById("app"))