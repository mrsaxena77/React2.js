class Input extends React.Component {

    state = {
        tasks: ""
    };

    render () {
        return (
            <div>
                <input type="text" value= {this.state.tasks} ></input>
                <button>Submit</button>
            </div>
        );
    }

}

// export default Input;