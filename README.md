# inline-editable-table

> 

[![NPM](https://img.shields.io/npm/v/inline-editable-table.svg)](https://www.npmjs.com/package/inline-editable-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save inline-editable-table
```

## Usage

```jsx
import React, { Component } from 'react'

import EditableTable from 'inline-editable-table'

class Example extends Component {
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
            name: 'Alex Bae',
            surname: 'Baran',
            birthYear: '2017',
            birthCity: '34',
          },
          {
            name: 'Jason Fox',
            surname: 'Baran',
            birthYear: '2017',
            birthCity: '34',
          },
          {
            name: 'Brian Chin',
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
      <EditableTable
            content={content}
            onCancel={this.onCancel}
            onSave={this.onSave}
      />
    )
  }
}
```

## License

MIT © [baehs1989](https://github.com/baehs1989)
