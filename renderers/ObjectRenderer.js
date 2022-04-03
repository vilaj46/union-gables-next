import BlockContent from "@sanity/block-content-to-react";

import RedBallLinks from "../components/RedBallLinks";

import createLinkObjects from "../components/RedBallLinks/utilities/createLinkObjects";

const ObjectRenderer = (props) => {
  // Fall back to default handling
  const { _type } = props.node;
  if (_type === "redBallList") {
    const links = createLinkObjects(props.node.red_ball_list);
    return <RedBallLinks links={links} />;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

export default ObjectRenderer;
