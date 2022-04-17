import BlockContent from "@sanity/block-content-to-react";

// Components
import RedBallLinks from "../components/RedBallLinks";
import { PageTitles } from "../@core/components/PageTitles/PageTitles";

// Utilities
import createLinkObjects from "../components/RedBallLinks/utilities/createLinkObjects";

const ObjectRenderer = (props) => {
  // Fall back to default handling
  const { _type } = props.node;

  if (_type === "pageTitles") {
    const { bnb, center, header, text } = props.node;
    return <PageTitles bnb={bnb} center={center} header={header} text={text} />;
  }

  if (_type === "redBallList") {
    const links = createLinkObjects(props.node.red_ball_list);
    return <RedBallLinks links={links} />;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

export default ObjectRenderer;
