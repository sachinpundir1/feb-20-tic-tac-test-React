class Box extends React.Component {
    handleClick = (e) => {
        const boxClass = e.target.classList;        
        const { index, update } = this.props;
        let { xround } = this.props;

        // checking the round and prevent change of value 
        // on clicking again
        if (boxClass.length >= 2) return;
        else {
            if (xround) {
                boxClass.add("x");
                xround = false;
            } else {
                boxClass.add("o");
                xround = true;
            }
        }
        update(index, xround);      // set the state arr value in parent Comp
    };

    render() {        
        return (
            <div className="box" onClick={this.handleClick}>
                {this.props.value}
            </div>
        );
    }
}
