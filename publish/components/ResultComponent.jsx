import React, { Component } from "react";
import { Result, Button } from "antd";

class ResultComponent extends Component {
  render() {
    const { status, title, description, textButton, textBuy } = this.props;
    return (
      <div>
        <Result
          status={status}
          title={title}
          subTitle={description}
          extra={[
            <Button type="primary" key="console">
              {textButton}
            </Button>,
            <Button key="buy">{textBuy}</Button>
          ]}
        />
      </div>
    );
  }
}

export default ResultComponent;
