import React, { Component } from 'react'

import ExampleComponent from 'inline-editable-table'

export default class App extends Component {

  onSave(newData, updatedRow){
    console.log(newData, updatedRow)
  }

  onCancel(row){
    console.log(row)
  }


  render () {

    var content = {
      columns:[
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
          },                
      ],
      data: [
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: '2017',
            birthCity: '34',
          },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: '2017',
            birthCity: '34',
          },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: '2017',
            birthCity: '34',
          }
      ],
      options:{
        editable:{start:0, end: 10}
      }
    }

    return (
      <div style={{boxSizing:'border-box', padding: 25}}>
        <ExampleComponent
            content={content}
            onCancel={this.onCancel}
            onSave={this.onSave}
            style={{

            }}
        />
      </div>
    )
  }
}
