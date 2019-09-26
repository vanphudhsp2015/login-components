# React-Component-Login

Component Login use antd design

# Installing

Using npm

```ruby
$ npm install login-components
import { ResultComponent } from 'login-components'
```

Using yarn

```ruby
$ yarn add login-components
import { ResultComponent } from 'login-components'
```

Import stylesheets

```ruby
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
```

# Example

```ruby
import React, { Component } from "react";
import { ResultComponent } from 'login-components'

class App extends Component {
  render() {
    return (
      <div>
        <ResultComponent />
      </div>
    );
  }
}

export default App;
```

# Paramerter

| Props      | Description                                                        | Default    |
| ---------- | ------------------------------------------------------------------ | ---------- |
| status     | 'success' or 'error' or 'info'or 'warning' or'404'or '403'or '500' | 'info'     |
| title      | string                                                             |
| subTitle   | description(string)                                                |
| textButton | string                                                             | textButton |
| textBuy    | string                                                             |
