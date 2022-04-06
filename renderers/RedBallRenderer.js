import BlockContent from "@sanity/block-content-to-react";

import RedBall from "../components/RedBallLinks/components/RedBall";

const RedBallRenderer = (props) => {
  // Fall back to default handling
  const { _type = "redBall" } = props.node;

  if (_type === "redBall") {
    return <RedBall />;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

export default RedBallRenderer;
