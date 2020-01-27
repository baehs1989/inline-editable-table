import React, { Component } from 'react'
import Row from './Component/Row/Row';
import classes from './Table.module.css';

export default class EditableTable extends Component {
    state = {
        index:true,
        data:JSON.parse(JSON.stringify(this.props.content.data)),
        previousData:JSON.parse(JSON.stringify(this.props.content.data)),
        options:this.props.content.options?this.props.content.options:{}
    }

    onEditingIndexChange = (index) => {
        this.setState({index:index});
    }

    onSave = (row) => {
      if (this.props.onSave){
        this.props.onSave(this.state.data, row)
      }

      let newData = JSON.parse(JSON.stringify([...this.state.data]));
      this.setState({previousData:newData})      


    }

    onCancel = (row) => {
      if (this.props.onCancel){
        this.props.onCancel(row)
      }
      let newData = JSON.parse(JSON.stringify([...this.state.previousData]));
      this.setState({data:newData})
    }

    onValueChange = (value, row, column) => {
      let newData = [...this.state.data];
      newData[row][column] = value;
      this.setState({
        data : newData
      })

    }
    

    render() {
        var headerOrder = []

        var headers = this.props.content.columns.map(header => {
            headerOrder.push(header.field)
            return <th key={header.field}>{header.title}</th>
        })

        var rows = this.state.data.map((row,index) => {
            return <Row 
                        key={index} 
                        index={index} 
                        header={headerOrder} 
                        onValueChange={this.onValueChange}

                        onCancel={this.onCancel} 
                        onSave={this.onSave}

                        outerDiv={classes.OuterDiv}
                        

                        editable={this.state.options.editable?this.state.options.editable:{start:0, end:headers.length}} 
                        onEditingIndexChange={this.onEditingIndexChange}
                        editing={((index === this.state.index) || (this.state.index === true))}
                        data={row}/>
        })

        return (
          <div className={classes.OuterDiv}>
            <table className={classes.Table}>
                <thead>
                    <tr>
                        {headers}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>  
          </div>
              
                                
        )

    }

}
