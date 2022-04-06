import BlockContent from "@sanity/block-content-to-react";

import Youtube from "../components/Youtube";

const YoutubeRenderer = (props) => {
  // Fall back to default handling
  const { _type = "youtube" } = props.node;

  if (_type === "youtube") {
    return <Youtube />;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

export default YoutubeRenderer;
