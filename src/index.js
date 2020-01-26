// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// import styles from './styles.css'

// export default class EditableTable extends Component {
//   static propTypes = {
//     text: PropTypes.string
//   }

//   render() {
//     const {
//       text
//     } = this.props

//     return (
//       <div className={styles.test}>
//         Example Component: {text}
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import Row from './Container/Row/Row';

export default class EditableTable extends Component {
    state = {
        index:true,
    }

    onEditingIndexChange = (index) => {
        this.setState({index:index});
    }
    

    render() {
        var headerOrder = []

        var headers = this.props.content.columns.map(header => {
            headerOrder.push(header.field)
            return <th key={header.field}>{header.title}</th>
        })

        var rows = this.props.content.data.map((row,index) => {
            return <Row 
                        key={index} 
                        index={index} 
                        header={headerOrder} 

                        onCancel={this.props.onCancel?this.props.onCancel:null} 
                        onValueChange={this.props.onValueChange?this.props.onValueChange:null}
                        onValueSave={this.props.onValueSave?this.props.onValueSave:null}

                        editable={this.props.content.options.editable} 
                        onEditingIndexChange={this.onEditingIndexChange}
                        editing={((index === this.state.index) || (this.state.index === true))}
                        data={row}/>
        })

        return (
            <table className="editable-table" width="100%" style={{...this.props.style}}>
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
                                
        )

    }

}
