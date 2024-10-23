import { motion } from "framer-motion";

function FlowerCard({
  cursorEnterFlowerCard,
  cursorLeaveFlowerCard
}) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <motion.div
      onMouseEnter={cursorEnterFlowerCard}
      onMouseLeave={cursorLeaveFlowerCard}
      onClick={handleRefresh}
      className="card2 colThree"
    >
      <div className="flowerCard">
        <svg
          className="flowerIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#ffffff"
          width="45%"
          height="45%"
        >
          <path d="M512,224.438c0-63.766-51.703-115.469-115.484-115.469c-8.781,0-17.328,1-25.531,2.859 C365.656,52.984,316.219,6.875,256,6.875c-60.234,0-109.672,46.109-114.984,104.953c-8.219-1.859-16.766-2.859-25.531-2.859 C51.703,108.969,0,160.672,0,224.438c0,47.594,28.797,88.469,69.906,106.141c-10.297,17.281-16.234,37.484-16.234,59.063 c0,63.766,51.703,115.484,115.484,115.484c34.625,0,65.672-15.266,86.844-39.406c21.156,24.141,52.219,39.406,86.844,39.406 c63.781,0,115.484-51.719,115.484-115.484c0-21.578-5.938-41.781-16.25-59.063C483.203,312.906,512,272.031,512,224.438z M256,372.531c-53.563,0-97-43.406-97-97c0-53.563,43.438-96.984,97-96.984s96.984,43.422,96.984,96.984 C352.984,329.125,309.563,372.531,256,372.531z" />
        </svg>
      </div>
    </motion.div>
  );
}

export default FlowerCard;
