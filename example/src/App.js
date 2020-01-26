import React, { Component } from 'react'

import ExampleComponent from 'inline-editable-table'

export default class App extends Component {


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
            birthYear: 2017,
            birthCity: 34,
          },
      ],
      options:{
        editable:{start:0, end: 4}
      }
    }

    return (
      <div>
        <ExampleComponent
            content={content}
            onValueChange={()=>console.log("onValueChange")}
            onCancel={()=>console.log("onCancel")}
            onValueSave={()=>console.log("onValueSave")}
        />
      </div>
    )
  }
}
