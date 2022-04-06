import BlockContent from "@sanity/block-content-to-react";

import TripAdvisor from "../components/TripAdvisor";

const TripAdvisorRenderer = (props) => {
  // Fall back to default handling
  const { _type = "tripAdvisor" } = props.node;

  if (_type === "tripAdvisor") {
    return <TripAdvisor />;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

export default TripAdvisorRenderer;
