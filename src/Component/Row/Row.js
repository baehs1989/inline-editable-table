import React from 'react';
import classes from './Row.module.css'

class Row extends React.Component {
    state = {
        editing:false,
    }

    handleValueChange = (event, row, column) => {
        this.props.onValueChange(event.target.value, row, column);
    }

    handleEditButton = () => {
        this.setState({editing:true})
        this.props.onEditingIndexChange(this.props.index)
    }

    handleSaveButton = (row) =>{
        this.setState({editing:false})
        this.props.onSave(row)
        this.props.onEditingIndexChange(true)

    }

    handleCancelButton = (row) =>{
        if (this.props.onCancel){
            this.props.onCancel(row)
        }

        this.setState({editing:false})

        this.props.onEditingIndexChange(true)


    }

    render() {
        var td = []


        for(let i in this.props.header){
            td.push(
                <td key={this.props.index+'-'+this.props.header[i]}>
                    {(!this.state.editing || !(this.props.editable.start <= i && this.props.editable.end > i))?
                        <div>{this.props.data[this.props.header[i]]?this.props.data[this.props.header[i]]:''}</div>
                        :
                        null
                    }
                    
                    {(this.props.editable.start <= i && this.props.editable.end > i) && this.state.editing?
                        <input
                            type="text" 
                            onChange={(event) => this.handleValueChange(event, this.props.index, this.props.header[i])} 
                            value={this.props.data[this.props.header[i]]?this.props.data[this.props.header[i]]:''}
                        />
                        :null
                    }
                </td>
            )
        }

        return (
            <tr>
                {td}
                <td>
                    {this.state.editing?
                        <div>
                            <button onClick={() => this.handleSaveButton(this.props.index)}>Save</button>
                            <button onClick={() => this.handleCancelButton(this.props.index)}>Cancel</button>
                        </div>

                        :
                        <button disabled={!this.props.editing} onClick={this.handleEditButton}>Edit</button>
                    }
                </td>
            </tr>          
                                
        )

    }

}


export default Row;