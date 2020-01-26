import React from 'react';

class Row extends React.Component {
    state = {
        editing:false,
    }

    handleValueChange = (event, row, column) => {
        if (this.props.onValueChange){
            this.props.onValueChange(event.target.value, row, column)
        }
        
    }

    handleEditButton = () => {
        this.setState({editing:true})

        this.props.onEditingIndexChange(this.props.index)

    }

    handleSaveButton = () =>{
        if (this.props.onValueSave){
            this.props.onValueSave()
        }

        this.setState({editing:false})

        this.props.onEditingIndexChange(true)

    }

    handleCancelButton = () =>{
        if (this.props.onCancel){
            this.props.onCancel()
        }

        this.setState({editing:false})

        this.props.onEditingIndexChange(true)


    }

    render() {
        var td = []


        for(let i in this.props.header){
            td.push(
                <td key={this.props.index+'-'+this.props.header[i]}>
                    {(!this.state.editing || !(this.props.editable.start <= i && this.props.editable.end >= i))?
                        <div>{this.props.data[this.props.header[i]]?this.props.data[this.props.header[i]]:''}</div>
                        :
                        null
                    }
                    
                    {(this.props.editable.start <= i && this.props.editable.end >= i) && this.state.editing?
                        <input
                            type="text" 
                            onChange={(event) => this.handleValueChange(event, this.props.index, this.props.header[i])} 
                            value={this.props.data[this.props.header[i]]?this.props.data[this.props.header[i]]:''} 
                            style={{maxWidth:'90%'}}/>
                        :null
                    }
                </td>
            )
        }

        return (
            <tr className="editable-row">
                {td}
                <td>
                    {this.state.editing?
                        <div>
                            <button className="save" onClick={this.handleSaveButton}>Save</button>
                            <button className="cancel" onClick={this.handleCancelButton}>Cancel</button>
                        </div>

                        :
                        <button className="edit" disabled={!this.props.editing} onClick={this.handleEditButton}>Edit</button>
                    }
                </td>
            </tr>          
                                
        )

    }

}


export default Row;